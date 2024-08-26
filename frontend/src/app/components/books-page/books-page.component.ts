import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  public books:Book[]=this.bookService.books;
  public filteredBooks!:Book[];
  public showDialog:boolean=false;
  constructor(private bookService:BookService) { }
  ngOnInit(): void {

    //get books from api
    this.bookService.getBooks().subscribe((result)=>{
    this.books=result;
    this.filteredBooks=result;
     console.log(result)
           })
  }

  filterBooks(typedFilter:string){
    if(typedFilter==='' || typedFilter===undefined)
     this.filteredBooks=this.books;
    else{
    this.filteredBooks= this.books.filter((book)=>book.title.toLowerCase().includes(typedFilter.toLowerCase()) || book.author!.fullName.toLowerCase().includes(typedFilter.toLowerCase()));
    }
  }

addBook(book:Book){
  this.books.push(book);
}
    deleteBook(id:number){
    console.log('got here')
        this.bookService.deleteBook(id).subscribe((result)=>{
      if(result){
      this.books=this.books.filter((book)=>book.id!==id);
      this.filteredBooks=this.books;
      }else{
        alert('error deleting book');
      }
      });
 }
togglePopUpForm(){
  this.showDialog=!this.showDialog;
}
}