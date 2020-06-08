function enviarMensagem() {

    const pessoa = true;
    const empresa = true;


    var selectTipo = document.getElementById("combocontato").value;
    var servico = "";

    var obj= {};

    if(selectTipo === "PF"){
        servico = 'http://localhost:3333/pessoa';

        var nome = document.getElementById("nomePessoa").value;
        var email = document.getElementById("emailPessoa").value;
        var idade = document.getElementById("idadePessoa").value;
        var telefone= document.getElementById("telefonePessoa").value;
        //var cidade = document.getElementById("idadePessoa").value;

        obj = {
            "nome": nome.trim(),
            "email": email.trim(),
            "idade": idade.trim(),
            "telefone": telefone.trim(),
            "cidade": 1
        }

    }else{
        servico = 'http://localhost:3333/instituicao';

        var nomeInstituicao = document.getElementById("nomeEmpresa").value;
        var cpnj = document.getElementById("cnpjEmpresa").value;
        var telefone = document.getElementById("telefoneEmpresa").value;
        //var cidade = document.getElementById("idadePessoa").value;

        obj = {
            "nomeInstituicao": nomeInstituicao.trim(),
            "cpnj": cpnj.trim(),
            "telefone": telefone.trim(),
            "cidade": 1
        }
    }

    var requisicao = {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

    return fetch(servico, requisicao)
        .then(rest => rest.json())
        .then(res =>{
            if(res){
                console.log("Sucesso salvar")
                if(selectTipo === "PF"){
                    this.agendarHorario(res.id_pessoa, selectTipo);
                }else{
                    this.agendarHorario(res.id_instituicao, selectTipo);
                }
               
            }else{
                console.log("Falha")
            }
         
        })

}

function agendarHorario(id, selectTipo){

    var dataVisita = document.getElementById("dateSelect").value;
    var horaVisita = document.getElementById("timeSelect").value;
    var qtdPessoas = document.getElementById("quantidadePessoas").value;

    var idFlag = id;


    var obj = {};

    if(selectTipo === "PF"){
        obj = {
            "dataVisita": dataVisita.trim(),
            "horaVisita": horaVisita.trim(),   
            "qtdPessoas": null,
            "idPessoa": idFlag,
            "idInstituicao": null,
        }
    }else{
        obj = {
            "dataVisita": dataVisita.trim(),
            "horaVisita": horaVisita.trim(),
            "qtdPessoas": qtdPessoas.trim(),
            "idPessoa": null,
            "idInstituicao": idFlag,
        }
    }

    var requisicao = {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
debugger
    return fetch('http://localhost:3333/agendamento', requisicao)
    .then(rest => rest.json())
    .then(res =>{
        if(res){
            console.log("Agendado Sucesso")
        }else{
            console.log("Agendamento falhou")
        }
     
    })
}