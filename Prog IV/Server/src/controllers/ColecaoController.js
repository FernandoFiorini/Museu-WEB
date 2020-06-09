import Colecao from "../models/colecao";

class ColecaoController {
    async salvar(req, res) {
  
        const obj = {
            tx_nomecol: req.body.nomeColecao,
            dt_colecao: req.body.dataColecao
        } 
  
        const colecao = await Colecao.create(obj);

        return res.json(
            colecao
        );
    }

    async listar(req, res) {
  
        const colecao = await Colecao.findAll();

        return res.json(
            colecao
        );
    }
}

export default new ColecaoController();