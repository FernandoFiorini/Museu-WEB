import Colecao from "../models/colecao";

class ColecaoController {
    async salvar(req, res) {
  
        const obj = {
            tx_nomecol: req.body.nomeColecao,
            dt_colecao: req.body.dataColecao
        } 
  
        const cidade = await Colecao.create(obj);

        return res.json(
            cidade
        );
    }
}

export default new ColecaoController();