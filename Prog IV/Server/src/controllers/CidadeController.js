import Cidade from "../models/cidade";

class CidadeController {
    async listar(req, res) {
  
        const codigoCidade = req.query.codigoCidade

        console.log(codigoCidade)
        const cidade = await Cidade.findAll({
            where: {
              id_estado: codigoCidade,
            }
        });

        return res.json(
            cidade
        );
    }

    async listarPorEstado(req, res) {
  
        const codigoEstado= req.body.codigoEstado;     

        const listObj = await Cidade.findAll({
            where: { id_estado: codigoEstado }
        });

        return res.json(
            listObj
        );
    
    }
}





export default new CidadeController();