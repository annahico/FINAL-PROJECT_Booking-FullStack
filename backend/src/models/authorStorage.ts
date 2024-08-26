import { Connection } from "mysql";
import { Author } from "./author";
import { DatabaseStorage } from "./databaseStorage";

export class AuthorsStorage extends DatabaseStorage{
    constructor(connection:Connection){
        super(connection);                          
    }
    public async getAuthors(){
        try{
      const result= await this.query('select * from authors;');
      return result;
        }catch(err){
            throw err;
        }    
    }

    public async addAuthor(author:Author):Promise<number>{
   try {
    const result=await this.query('insert into authors(email,fullName,bio,authorImageUrl) values(?,?,?,?)',[author.email,author.fullName,author.bio,author.authorImageUrl]); 
    return result.insertId ; 
   } catch (err) {  
    throw err;
   }
    }

    public async deleteAuthor(authorId:number):Promise<boolean>{
        try {
            let result=await this.query('delete from authors where id=?',[authorId])
           return true;
        } catch (error) {
           return false; 
        }      
    }

    public async updateAuthor(id:number,data:Author):Promise<boolean>{
        try {      
            let result=await this.query('update authors set email=?,fullName=?,bio=?,authorImageUrl where id=?',[data.email,data.fullName,data.bio,data.authorImageUrl,id])
            return true;
        } catch (error) {    
            return false;
        }
    }
}