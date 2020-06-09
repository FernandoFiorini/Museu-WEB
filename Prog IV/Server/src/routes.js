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
import CategoriaController from "./controllers/CategoriaController";
import StatusController from "./controllers/StatusController";
import SecaoController from "./controllers/SecaoController";

import "./config/conectDatabase";



const routes = new Router();

//LOGIN
routes.post('/user', UserController.index);

//SALVAR
routes.post('/agendamento', AgendamentoController.salvar);
routes.post('/salvarObjeto', ObjetoController.salvar);
routes.post('/pessoa', PessoaController.salvar);
routes.post('/instituicao', InstituicaoController.salvar);
routes.post('/colecao', ColecaoController.salvar);
routes.post('/midia', MidiaController.salvar);

//UPDATE
routes.put('/objetoUpdate', ObjetoController.update);

//DELETE
routes.delete('/objetoDelete', ObjetoController.delete);

//GET
routes.get('/listarObjetos',ObjetoController.listar);
routes.get('/listarCidades', CidadeController.listar);
routes.get('/listarEstados', EstadoController.listar);
routes.post('/listarImagemObjeto', MidiaController.listarImagemObjeto);

//COMBOS
routes.get('/comboCategoria', CategoriaController.listar);
routes.get('/comboColecao', ColecaoController.listar);
routes.get('/comboStatus', StatusController.listar);
routes.get('/comboSecao', SecaoController.listar);

//PESQUISA
routes.post('/pesquisaObjeto',ObjetoController.findByNomeObjeto);
routes.post('/pesquisaPorId',ObjetoController.findById);
routes.post('/listarCidadePorEstado', CidadeController.listarPorEstado);

module.exports = routes;
