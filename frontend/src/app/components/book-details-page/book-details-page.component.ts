import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.css']
})
export class BookDetailsPageComponent implements OnInit {
  public book!:Book;
  constructor(private bookService:BookService) { }
  ngOnInit(): void {
    this.book=this.bookService.selectedBookForDetails;
      }
}
