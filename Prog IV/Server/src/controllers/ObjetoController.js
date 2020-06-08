import Objeto from "../models/objeto";

class ObjetoController {
    
    async salvar(req, res) {

        const obj = {
            tx_nomeobj: req.body.nome,
            id_categoria: req.body.categoria, //combo tela   
            id_colecao: req.body.colecao,
            id_status: req.body.status, // combo tela
            id_midia: req.body.midia,
            id_secao: req.body.secao,// combo tela

        }

        if(obj.tx_nomeobj == null){
            return res.status(400).json({ error: "Informe todos os campos" });
        }

        const criarOBJ = await Objeto.create(obj);
        
        return res.json(
             criarOBJ
        );
    }
}

export default new ObjetoController();