import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css']
})
export class AuthorItemComponent implements OnInit {
  @Input() author!:Author;
  @Output() deleteAuthorEvent:EventEmitter<number> = new EventEmitter();
  
  constructor(private router:Router,private authorService:AuthorService) { }
  ngOnInit(): void {
  }
  emitDeleteAuthorEvent(){
    this.deleteAuthorEvent.emit(this.author.id)
  }
  goToDetails(){
 this.authorService.selectedAuthor=this.author;
 this.router.navigateByUrl('/author-details')
  }
}
