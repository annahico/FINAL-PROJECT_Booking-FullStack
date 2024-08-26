import cors from 'cors';
import { default as bodyParser, default as express } from 'express';
import authorsRouter from './routes/authors';
import booksRouter from './routes/books';

const port=4000;
const app=express();
app.use(express.json())
app.use(bodyParser.json());
app.use(cors({origin:'*'}));
app.use('/bookStore/authors',authorsRouter);
app.use('/bookStore/books',booksRouter)

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

