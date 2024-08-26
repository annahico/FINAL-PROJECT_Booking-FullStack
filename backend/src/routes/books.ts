
import express, { Request, Response } from 'express';
import connection from '../database';
import { Book } from '../models/book';
import { BooksStorage } from '../models/bookStorage';

let bookStorage:BooksStorage= new BooksStorage(connection);
const booksRouter=express.Router();

booksRouter.get('/',async (req:Request,res:Response)=>{
   let books= await bookStorage.getBooks();
   console.log(books);
    res.send(books);
});

booksRouter.get('/author/:authorId',async (req,res)=>{
    let id:number=(req.params.authorId as unknown as number);
    let books= await bookStorage.getAuthorBooks(id);
    res.send(books); 
})

booksRouter.get('/:id',async (req,res)=>{
    console.log('got delete request '
    )
    let id:number=(req.params.id as unknown as number);
    let book= await bookStorage.getBook(id);
    res.send(book);
})

booksRouter.delete('/:id',async(req,res)=>{
    let id:number =(req.params.id as unknown as number);
    let result=await bookStorage.deleteBook(id);

if(result) {
console.log(result);
res.send(result)
}
else
res.send('error deleting book');
})

booksRouter.post('/',async(req,res)=>{
    const newBook:Book=(req.body as unknown as Book);
    let result=await bookStorage.addBook(newBook);
    if(result){
    res.send({id:result})
    }else{
        res.send('Failed to add Book');
    }
})

booksRouter.patch('/:id',async(req,res)=>{
    let id:number=(req.params.id as unknown as number);
    let data:Book=req.body;
    let result=await bookStorage.updateBook(id,data);
  res.send(result)
});

export default booksRouter;










