import Manutencao from "../models/manutencao";

class ManutencaoController {
    async salvar(req, res) {

        const obj = {
            "dt_inicio":req.body.dataInicio,
            "dt_fim":req.body.dataFim,
            "id_objeto":req.body.idObjeto,
        }
  
        const manutencao = await Manutencao.create(obj);

        return res.json(
            manutencao
        );
    }

  
}

export default new ManutencaoController();