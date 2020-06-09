import Categoria from "../models/categoria";

class CategoriaController {

    async listar(req, res) {
  
        const colecao = await Categoria.findAll();

        return res.json(
            colecao
        );
    }
}

export default new CategoriaController();