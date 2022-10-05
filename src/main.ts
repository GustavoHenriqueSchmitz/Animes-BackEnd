import express from 'express';
import {Express} from 'express';

const app: Express = express();

app.use(express.json());

app.listen(5000, () => {
  console.log('Servidor inicializado na porta 5000');
});
