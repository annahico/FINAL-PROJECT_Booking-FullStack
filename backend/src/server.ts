import cors from 'cors';
import { default as bodyParser, default as express } from 'express';

const port=3000;

const app=express();
app.use(express.json())
app.use(bodyParser.json());
app.use(cors({origin:'*'}));


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
