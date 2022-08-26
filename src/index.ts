import express from 'express';
import statusRoute from './routes/status.route';
import userRoute from './routes/users.route';
const app = express();

//configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//configuração das rotas
app.use(userRoute);
app.use(statusRoute);

//inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação excutando na porta 3000');
});