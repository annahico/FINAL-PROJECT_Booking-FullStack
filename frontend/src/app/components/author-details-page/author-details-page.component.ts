import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Book } from 'src/app/models/book';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-author-details-page',
  templateUrl: './author-details-page.component.html',
  styleUrls: ['./author-details-page.component.css']
})
export class AuthorDetailsPageComponent implements OnInit {
  public author!:Author;
  public authorBooks!:Book[];
  constructor(private authorService:AuthorService,private bookService:BookService) { }
  ngOnInit(): void {
    this.author=this.authorService.selectedAuthor;
    this.getAuthorBooks();
    }
  getAuthorBooks(){
    this.bookService.getAuthorBooks(this.author.id).subscribe((result)=>{
            if(result){
      this.authorBooks=result;
      }
    })
  }
}
