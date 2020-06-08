import Agendamento from "../models/agendamento";

//import Estado from "../models/estado";
//import Cidade from "../models/cidade";
//import Pessoa from "..models/pessoa";

class AgendamentoController {
    async salvar(req, res) {

        //flagTipoAgendamento == 1  = PESSOA
        //flagTipoAgendamento == 2  = INSTITUICAO

       
        const flagTipoAgendamento = null;

        const objeto = {
            dt_visita: req.body.dataVisita,
            hr_visita: req.body.horaVisita,
            qt_pessoas: req.body.qtdPessoas,
            idPessoa: req.body.idPessoa,
            idInstituicao: req.body.idInstituicao
        }

        if(flagTipoAgendamento != null){
            return res.status(400).json({ error: "Informe" });
        }

        const criarObj = await Agendamento.create(objeto);

       
        return res.json(
            criarObj ? true : false
        );
    }
}

export default new AgendamentoController();