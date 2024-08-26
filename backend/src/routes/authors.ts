import express, { Request, Response } from 'express';
import connection from '../database';
import { Author } from '../models/author';
import { AuthorsStorage } from '../models/authorStorage';

const authorsRouter = express.Router();
const authorsStorage = new AuthorsStorage(connection);

authorsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const authors = await authorsStorage.getAuthors();
        res.json(authors);
    } catch (error) {
        res.status(500).send({ message: 'Failed to get authors', error });
    }
});

authorsRouter.post('/', async (req: Request, res: Response) => {
    try {
        const author = req.body as Author;
        console.log(author);
        const result = await authorsStorage.addAuthor(author);
        if (result) {
            res.status(201).send({ id: result });
        } else {
            res.status(400).send({ id: null, message: 'Failed to add author' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Failed to add author', error });
    }
});

authorsRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10); 
        if (isNaN(id)) {
            return res.status(400).send({ message: 'Invalid ID' });
        }
        const result = await authorsStorage.deleteAuthor(id);
        if (result) {
            res.status(200).send(true);
        } else {
            res.status(404).send(false);
        }
    } catch (error) {
        res.status(500).send({ message: 'Failed to delete author', error });
    }
});

authorsRouter.patch('/:id', async (req: Request, res: Response) => {
    try {
        const authorUpdateData = req.body as Author;
        const id = parseInt(req.params.id, 10); 
        if (isNaN(id)) {
            return res.status(400).send({ message: 'Invalid ID' });
        }
        const result = await authorsStorage.updateAuthor(id, authorUpdateData);
        if (result) {
            res.status(200).send('Author updated');
        } else {
            res.status(400).send('Update operation failed');
        }
    } catch (error) {
        res.status(500).send({ message: 'Failed to update author', error });
    }
});

export default authorsRouter;
