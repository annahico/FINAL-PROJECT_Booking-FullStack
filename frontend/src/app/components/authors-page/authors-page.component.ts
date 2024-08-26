import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-authors-page',
  templateUrl: './authors-page.component.html',
  styleUrls: ['./authors-page.component.css']
})
export class AuthorsPageComponent implements OnInit {
    public authors!:Author[];
  public filteredAuthors!:Author[]
  public showDialog:boolean=false;
  constructor(private authorService:AuthorService) { }
  ngOnInit(): void {

    //get authors;
    this.authorService.getAuthors().subscribe((result)=>{
      this.authors=result;
      this.filteredAuthors=this.authors;
      console.log(this.authors)
    });
      }

  addAuthor(author:Author){
    this.authors.push(author);
  }
  toggleDialog(){
    this.showDialog=!this.showDialog;
  }
  onSearching(query:string){
    this.filteredAuthors=this.authors.filter((author)=>author.fullName.toLowerCase().includes(query));
  }
  deleteAuthor(id:number){
    this.authorService.deleteAuthor(id).subscribe((result)=>{
      if(result){
        this.authors=this.authors.filter((author)=>author.id!==id);
           }else{
        alert('error deleting author')
      }
    });
  }
}
