import {Router} from "express";

import UserController from "./controllers/UserController";
import AgendamentoController from "./controllers/AgendamentoController";
import ObjetoController from "./controllers/ObjetoController";
import PessoaController from "./controllers/PessoaController";
import InstituicaoController from "./controllers/InstituicaoController";
import CidadeController from "./controllers/CidadeController";
import EstadoController from "./controllers/EstadoController";
import ColecaoController from "./controllers/ColecaoController";
import MidiaController from "./controllers/MidiaController";
import "./config/conectDatabase";



const routes = new Router();

//LOGIN
routes.post('/user', UserController.index);

//SALVAR
routes.post('/agendamento', AgendamentoController.salvar);
routes.post('/objeto', ObjetoController.salvar);
routes.post('/pessoa', PessoaController.salvar);
routes.post('/instituicao', InstituicaoController.salvar);
routes.post('/colecao', ColecaoController.salvar);
routes.post('/midia', MidiaController.salvar);

//GET
routes.get('/listarCidades', CidadeController.listar);
routes.get('/listarEstados', EstadoController.listar);


module.exports = routes;
