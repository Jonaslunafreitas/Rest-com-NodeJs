import express, { Request, Response, NextFunction } from 'express';
import userRoute from './routes/users.route';
const app = express();

//configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//configuração das rotas
app.use(userRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Funcinando a aplicação com Npm Run dev' });
});

//inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação excutando na porta 3000');
});