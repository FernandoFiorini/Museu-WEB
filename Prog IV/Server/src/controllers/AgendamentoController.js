import Agendamento from "../models/agendamento";


class AgendamentoController {
    async salvar(req, res) {

        const objeto = {
            dt_visita: req.body.dataVisita,
            hr_visita: req.body.horaVisita,
            qt_pessoas: req.body.qtdPessoas,
            id_pessoa: req.body.idPessoa,
            id_instituicao: req.body.idInstituicao
        }

        if(req.body.dataVisita == null){
            return res.status(400).json({ error: "Informe" });
        }

        const criarObj = await Agendamento.create(objeto);

        return res.json(
            criarObj ? true : false
        );
    }
    
}

export default new AgendamentoController();