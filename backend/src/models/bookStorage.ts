import mysql from 'mysql';
import { Book } from './book';
import { DatabaseStorage } from './databaseStorage';

export class BooksStorage extends DatabaseStorage{
    constructor(connection:mysql.Connection){
      super(connection);
    }

    public async addBook(book:Book):Promise<number>{
      try{
      let result=await this.query('insert into books(title,imageUrl,info,authorId) values(?,?,?,?)',[book.title,book.imageUrl,book.info,book.authorId]);
      console.log(
   'test' 
      )
      console.log(result.insertId)
      return result.insertId;
      }catch(err){ 
        throw err;
     
      }
    }

    public async updateBook(id:number,data:Book):Promise<boolean>{
      try{
        let result=await this.query('update books set title=?,info=?,imageUrl=? where id=?;',[data.title,data.info,data.imageUrl,id]);
       console.log(result);
        return true;
      }catch(err){
        throw err;
      }
    }

    public async deleteBook(id:number):Promise<boolean>{
      try{
      const deletedBook=await this.query('delete from books where id=?  ; ',[id]);
      return true;
      }catch(err){
        return false;
        throw err;
      }
    } 

    public async getBooks():Promise<Book[]>{
      try{
      let result=await this.query('select books.id,books.authorId,books.imageUrl,books.title,books.info,authors.id as authId,authors.fullName,email,bio,authorImageUrl from books inner join authors on books.authorId=authors.id; ')
     let books:Book[]=[];
      for(let res of result){
         let book={
          id:res.id,
          authorId:res.authorId,
          imageUrl:res.imageUrl,
          title:res.title,
          info:res.info,
          author:{
            email:res.email,
            fullName:res.fullName,
            bio:res.bio,
            authorImageUrl:res.authorImageUrl   
          }
        }
        books.push(book);
      }
      return books;
      }catch(err){
        throw err;
      }
    } 
    public async getAuthorBooks(authorId:number){
      try {
        const result=await this.query('select * from books where authorId=?',[authorId]);
        return result;
      } catch (err) {
        throw err;  
      }
    }
    public async  getBook(id:number):Promise<Book> {
      try{
      const rows=await this.query('select * from books where id=?',[id]);
      const book:Book=rows[0];
      console.log(rows[0]);
      return book;    
    }catch(err){
      throw err;
    }
    }
}
