import { Author } from "./author";

export interface Book{
    id?:number;
    title:string;
    authorId?:number;
    imageUrl:string;
    info:string;
    author:Author;
}