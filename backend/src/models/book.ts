import { Author } from "./author";

export interface Book{
    id?:number;
    authorId?:number;
    title:string;
    imageUrl:string;
    info:string;
    author?:Author;
}