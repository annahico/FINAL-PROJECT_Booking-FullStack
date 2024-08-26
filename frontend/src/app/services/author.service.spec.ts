// author.service.spec.ts
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Author } from '../models/author'; // Ajusta la ruta según tu estructura de archivos
import { AuthorService } from './author.service';

describe('AuthorService', () => {
  let service: AuthorService;
  let httpMock: HttpTestingController;
  const baseUrl = "http://localhost:4000/bookStore/authors/"; // Definir URL aquí

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthorService]
    });
    service = TestBed.inject(AuthorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve authors from the API via GET', () => {
    const dummyAuthors: Author[] = [
      { id: 1, email: 'author1@example.com', fullName: 'Author One', bio: 'Bio of Author One', authorImageUrl: 'http://example.com/author1.jpg' },
      { id: 2, email: 'author2@example.com', fullName: 'Author Two', bio: 'Bio of Author Two', authorImageUrl: 'http://example.com/author2.jpg' }
    ];

    service.getAuthors().subscribe(authors => {
      expect(authors.length).toBe(2);
      expect(authors).toEqual(dummyAuthors);
    });

    const request = httpMock.expectOne(baseUrl);
    expect(request.request.method).toBe('GET');
    request.flush(dummyAuthors);
  });

  it('should add an author via POST', () => {
    const newAuthor: Author = { 
      id: 3, 
      email: 'author3@example.com', 
      fullName: 'Author Three', 
      bio: 'Bio of Author Three', 
      authorImageUrl: 'http://example.com/author3.jpg' 
    };
    const response = { status: 201, body: { id: 3 } };

    service.addAuthor(newAuthor).subscribe(res => {
      expect(res.status).toBe(201);
      expect(res.body.id).toBe(3);
    });

    const request = httpMock.expectOne(baseUrl);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(JSON.stringify(newAuthor));
    request.flush(response);
  });

  it('should delete an author via DELETE', () => {
    const authorId = 1;
    const response = true;

    service.deleteAuthor(authorId).subscribe(result => {
      expect(result).toBe(true);
    });

    const request = httpMock.expectOne(`${baseUrl}${authorId}`);
    expect(request.request.method).toBe('DELETE');
    request.flush(response);
  });
});
