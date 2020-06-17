import Categoria from "../models/categoria";

class CategoriaController {

    async listar(req, res) {
  
        const colecao = await Categoria.findAll();

        return res.json(
            colecao
        );
    }

    async findById(req, res) {

        const codigoCategoria= req.body.id;     
  
        const colecao = await Categoria.findOne({
            where: { id_categoria: codigoCategoria }
        });

        return res.json(
            colecao
        );
    }
}

export default new CategoriaController();