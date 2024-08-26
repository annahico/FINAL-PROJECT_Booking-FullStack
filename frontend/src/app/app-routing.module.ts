import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailsPageComponent } from '../components/author-details-page/author-details-page.component';
import { AuthorsPageComponent } from '../components/authors-page/authors-page.component';
import { BookDetailsPageComponent } from '../components/book-details-page/book-details-page.component';
import { BooksPageComponent } from '../components/books-page/books-page.component';

const routes: Routes = [{
  path:''
  ,component:BooksPageComponent},{

    path:'authors',
    component:AuthorsPageComponent
  },
  {
  path:'book-details',
  component:BookDetailsPageComponent

  },
  
  {
    path:'author-details',
    component:AuthorDetailsPageComponent
  
    },


   




  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
