import express, { Request, Response } from 'express';
import connection from '../database';
import { Author } from '../models/author';
import { AuthorsStorage } from '../models/authorStorage';


const authorsRouter=express.Router();
const authorsStorage:AuthorsStorage=new AuthorsStorage(connection);

authorsRouter.get('/',async(req:Request,res:Response)=>{
    let authors=await authorsStorage.getAuthors();
   res.send(authors);
})

authorsRouter.post('/',async(req:Request,res:Response)=>{
      const author=(req.body as unknown as Author);
    console.log(author);
    const result=await authorsStorage.addAuthor(author);
        if(result)
    res.send({id:result});
    else 
    res.send({id:null,message:"failed adding author"});
})

authorsRouter.delete(('/:id'),async(req,res)=>{
    const id:number=req.params.id as unknown as number;
    const result=await authorsStorage.deleteAuthor(id);
        if(result)
    res.send(true)
    else
    res.send(false)
});

authorsRouter.patch(('/:id'),async(req,res)=>{
    const authorUpdateData=(req.body as unknown as Author);
    const  id:number=req.params.id as unknown as number;
    let result=await authorsStorage.updateAuthor(id,authorUpdateData);
    if(result)
    res.status(200).send('Author Updated')
    else
    res.status(400).send('Update operation failed')
    })

export default authorsRouter;


