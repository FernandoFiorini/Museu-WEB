import Sequelize from "sequelize";
import databaseConfig from "../config/database";

import User from "../models/usuario";
import Agendamento from "../models/agendamento";
import Objeto from "../models/objeto";
import Pessoa from "../models/pessoa";
import Instituicao from "../models/instituicao";
import Cidade from "../models/cidade";
import Estado from "../models/estado"
import Colecao from "../models/colecao"
import Midia from "../models/midia"
import Secao from "../models/secao"
import Categoria from "../models/categoria"
import Status from "../models/status"
import Manutencao from "../models/manutencao"

const models = [User, Agendamento, Objeto, Instituicao, Pessoa, Cidade, Estado, Colecao, Midia, Secao, Categoria,Status,Manutencao];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      
  }

}

export default new Database();