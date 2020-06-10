import Objeto from "../models/objeto";
import Categoria from "../models/categoria"

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

    async update(req,res){

        const idObjeto = req.body.idObjeto;

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

        const criarObj = await Objeto.update(obj,{
            where: { id_objeto: idObjeto }
          });
        
        return res.json(
             criarOBJ
        );
    }

    async delete(req,res){

        const idObjeto = req.body.idObjeto;

        if(idObjeto == null){
            return res.status(400).json({ error: "Informe" });
        }

        const resuklt = await Objeto.destroy({
                where: { id_objeto: idObjeto }
        });

       
        return res.json(
            resuklt ? true : false
        );
    }

    async listar(req,res){

        const listObj = await Objeto.findAll();
        
        return res.json(
            listObj 
        );
    }

    async findByNomeObjeto(req,res){

        const pesquisa= req.body.pesquisa;     

        const listObj = await Objeto.findOne({
            where: { tx_nomeobj: pesquisa }
        });

        return res.json(
            listObj
        );
    }

    async findById(req,res){

        const idObjeto= req.body.id;     

        const listObj = await Objeto.findOne({
            where: { id_objeto: idObjeto }
        });

        return res.json(
            listObj
        );
    }
    
}

export default new ObjetoController();