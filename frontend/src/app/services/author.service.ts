import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  public selectedAuthor!:Author;
  private baseUrl:string="http://localhost:4000/bookStore/authors/"
  private authors:Author[]=[]; 
  private headers= { 'content-type': 'application/json'}
  constructor(private http:HttpClient) { }

  getAuthors():Observable<Author[]>{
    return this.http.get<Author[]>(this.baseUrl);
  }
  addAuthor(author:Author):Observable<any>{
    let body=JSON.stringify(author); 
    return this.http.post<any>(this.baseUrl, body, {headers:this.headers,observe:'response'});
  }
  deleteAuthor(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+id);
  }
}
