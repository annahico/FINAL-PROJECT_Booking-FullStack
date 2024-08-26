import mysql from 'mysql';
import { Book } from './book';
import { DatabaseStorage } from './databaseStorage';

export class BooksStorage extends DatabaseStorage {
    constructor(connection: mysql.Connection) {
        super(connection);
    }

    public async addBook(book: Book): Promise<number> {
        try {
            const result = await this.query(
                'INSERT INTO books (title, imageUrl, info, authorId) VALUES (?, ?, ?, ?)',
                [book.title, book.imageUrl, book.info, book.authorId]
            );
            return result.insertId as number;
        } catch (err) {
            console.error('Error adding book:', err);
            throw new Error('Failed to add book');
        }
    }

    public async updateBook(id: number, data: Book): Promise<boolean> {
        try {
            const result = await this.query(
                'UPDATE books SET title = ?, info = ?, imageUrl = ? WHERE id = ?',
                [data.title, data.info, data.imageUrl, id]
            );
            return result.affectedRows > 0; 
        } catch (err) {
            console.error('Error updating book:', err);
            throw new Error('Failed to update book');
        }
    }

    public async deleteBook(id: number): Promise<boolean> {
        try {
            const result = await this.query('DELETE FROM books WHERE id = ?', [id]);
            return result.affectedRows > 0; 
        } catch (err) {
            console.error('Error deleting book:', err);
            return false; 
        }
    }

    public async getBooks(): Promise<Book[]> {
        try {
            const result = await this.query(
                'SELECT books.id, books.authorId, books.imageUrl, books.title, books.info, authors.id AS authId, authors.fullName, authors.email, authors.bio, authors.authorImageUrl FROM books INNER JOIN authors ON books.authorId = authors.id'
            );

            return result.map((row: any) => ({
                id: row.id,
                authorId: row.authorId,
                imageUrl: row.imageUrl,
                title: row.title,
                info: row.info,
                author: {
                    email: row.email,
                    fullName: row.fullName,
                    bio: row.bio,
                    authorImageUrl: row.authorImageUrl
                }
            }));
        } catch (err) {
            console.error('Error getting books:', err);
            throw new Error('Failed to get books');
        }
    }

    public async getAuthorBooks(authorId: number): Promise<Book[]> {
        try {
            const result = await this.query('SELECT * FROM books WHERE authorId = ?', [authorId]);
            return result as Book[];
        } catch (err) {
            console.error('Error getting author books:', err);
            throw new Error('Failed to get author books');
        }
    }

    public async getBook(id: number): Promise<Book | null> {
        try {
            const rows = await this.query('SELECT * FROM books WHERE id = ?', [id]);
            return rows[0] || null; 
        } catch (err) {
            console.error('Error getting book:', err);
            throw new Error('Failed to get book');
        }
    }
}
