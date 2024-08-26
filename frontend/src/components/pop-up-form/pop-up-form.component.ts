import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Book } from 'src/app/models/book';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book-service.service';
@Component({
  selector: 'app-pop-up-form',
  templateUrl: './pop-up-form.component.html',
  styleUrls: ['./pop-up-form.component.css']
})
export class PopUpFormComponent implements OnInit {



  public authors:Author[]=[];
  @Input() showDialog:boolean=false;
  @Output() createBookEvent:EventEmitter<Book> =new EventEmitter();

  public newBook:Book={
    
    title: '',
    info: '',
    imageUrl: '',
    authorId:undefined,
    author:{
      fullName: '',
      email: '',
      bio: '',
      id: 0,
      authorImageUrl:''
    }
    
  };

  constructor(private bookService:BookService,private authorService:AuthorService) { }



  ngOnInit(): void {

    this.authorService.getAuthors().subscribe((result)=>{

    
      this.authors=result;
    })





  }

  addBook(){
    

      console.log(this.newBook);
    
      this.newBook.author =this.authors.find((author)=>author.id===this.newBook.authorId)!;

      this.bookService.addBook(this.newBook).subscribe((result)=>{

        if(result.body.id){
        console.log(result.body.id);
        this.newBook.id=result.body.id;
       this.createBookEvent.emit(this.newBook);
       
    }

      });


  }

}
