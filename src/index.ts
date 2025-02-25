import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
    console.log('Hola Mundo');
    res.send('Hola Mundo');
})

app.listen(6505, () => {
    console.log('Active server.')
});