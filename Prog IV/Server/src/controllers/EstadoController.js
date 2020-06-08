import Estado from "../models/estado";

class EstadoController {
    async listar(req, res) {
        
        const cidade = await Estado.findAll();

        return res.json(
            cidade
        );
    }
}

export default new EstadoController();