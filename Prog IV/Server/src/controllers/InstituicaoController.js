import Instituicao from "../models/instituicao";

class InstituicaoController {
    
    async salvar(req, res) {

        const obj = {
            tx_nomeinst: req.body.nomeInstituicao,
            tx_cnpj: req.body.cpnj, //combo tela   
            tx_telefone: req.body.telefone, //combo tela
            id_cidade: req.body.cidade

        }

        if(obj.tx_nomeinst == null){
            return res.status(400).json({ error: "Informe todos os campos" });
        }

        const criarInstituicao = await Instituicao.create(obj);

        return res.json(
            criarInstituicao.dataValues
        );
    }
}

export default new InstituicaoController();