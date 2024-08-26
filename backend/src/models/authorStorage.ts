import { Connection } from "mysql";
import { Author } from "./author";
import { DatabaseStorage } from "./databaseStorage";

export class AuthorsStorage extends DatabaseStorage {
    constructor(connection: Connection) {
        super(connection);
    }

    public async getAuthors(): Promise<Author[]> {
        try {
            const result = await this.query('SELECT * FROM authors;');
            return result as Author[];
        } catch (err) {
            console.error('Error getting authors:', err);
            throw new Error('Failed to get authors');
        }
    }

    public async addAuthor(author: Author): Promise<number | null> {
        try {
            const result = await this.query(
                'INSERT INTO authors (email, fullName, bio, authorImageUrl) VALUES (?, ?, ?, ?)',
                [author.email, author.fullName, author.bio, author.authorImageUrl]
            );
            return result.insertId as number;
        } catch (err) {
            console.error('Error adding author:', err);
            throw new Error('Failed to add author');
        }
    }

    public async deleteAuthor(authorId: number): Promise<boolean> {
        try {
            const result = await this.query('DELETE FROM authors WHERE id = ?', [authorId]);
            return (result.affectedRows > 0); 
        } catch (error) {
            console.error('Error deleting author:', error);
            return false;
        }
    }

    public async updateAuthor(id: number, data: Author): Promise<boolean> {
        try {
            const result = await this.query(
                'UPDATE authors SET email = ?, fullName = ?, bio = ?, authorImageUrl = ? WHERE id = ?',
                [data.email, data.fullName, data.bio, data.authorImageUrl, id]
            );
            return (result.affectedRows > 0); 
        } catch (error) {
            console.error('Error updating author:', error);
            return false;
        }
    }
}
