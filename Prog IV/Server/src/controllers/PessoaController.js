import Pessoa from "../models/pessoa";

class PessoaController {
    
    async salvar(req, res) {

        const obj = {
            tx_nome: req.body.nome,
            tx_email: req.body.email, 
            nr_idade: req.body.idade,
            tx_telefone: req.body.telefone, 
            id_cidade: req.body.cidade,
        }

        if(obj.tx_nome == null){
            return res.status(400).json({ error: "Informe todos os campos" });
        }

        const criarPessoa = await Pessoa.create(obj);

        return res.json(
            criarPessoa.dataValues
        );
    }
}

export default new PessoaController();