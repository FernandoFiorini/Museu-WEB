import Midia from "../models/midia";

class MidiaController {
    async salvar(req, res) {

        const obj = {
            "id_midia":req.body.idMidia,
            "bl_midia":req.body.base64
        }
  
        const imagem = await Midia.create(obj);

        return res.json(
            imagem
        );
    }

    async listarImagemObjeto(req, res) {
  
        const codigoImagem = req.body.codigoImagem;

        const imagem = await Midia.findAll({
            where: { id_midia: codigoImagem }
        });

        return res.json(
          
            imagem
            
          
        );
    }
}

export default new MidiaController();