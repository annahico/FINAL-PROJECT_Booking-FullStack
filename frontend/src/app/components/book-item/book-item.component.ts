import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
@Input() book!:Book;
@Output()deleteEvent:EventEmitter<number> =new EventEmitter();
  constructor(private router:Router,private bookService:BookService) { }
  ngOnInit(): void {
    }
  emitDeleteEvent(id:number){
    console.log(id)
    this.deleteEvent.emit(id);
  }
  goToBookDetails(){
    this.bookService.selectedBookForDetails=this.book;
    this.router.navigateByUrl('/book-details');
}
}
