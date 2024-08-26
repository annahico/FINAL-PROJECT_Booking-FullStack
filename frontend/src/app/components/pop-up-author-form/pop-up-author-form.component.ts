import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-pop-up-author-form',
  templateUrl: './pop-up-author-form.component.html',
  styleUrls: ['./pop-up-author-form.component.css']
})
export class PopUpAuthorFormComponent implements OnInit {
  @Input() showDialog:boolean=false;
  public author:Author={ 
 id:0,
  email:'',
  fullName:'',
  bio:'',
  authorImageUrl:''
  };
  @Output() createAuthorEvent:EventEmitter<Author> =new EventEmitter();
   constructor(private authorService:AuthorService) { }
  ngOnInit(): void {
  }
  addAuthor(){
    console.log(this.author);
    this.authorService.addAuthor(this.author).subscribe((result)=>{
      if(result.body.id){
        this.createAuthorEvent.emit(this.author);
      }
    });
      }
}
