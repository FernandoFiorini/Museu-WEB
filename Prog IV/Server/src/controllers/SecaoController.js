import Secao from "../models/secao";

class SecaoController {

    async listar(req, res) {
  
        const colecao = await Secao.findAll();

        return res.json(
            colecao
        );
    }
}

export default new SecaoController();