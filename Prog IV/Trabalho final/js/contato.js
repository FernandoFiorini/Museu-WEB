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
        var cidade = document.getElementById('comboCidade').value;

        var estado = document.getElementById('comboEstado').value;

        if(nome === ""){
           return alert("Favor preencher o nome")
        }
        else if(email === ""){
            return alert("Favor preencher o email")
        }
        else if(idade === ""){
            return alert("Favor preencher a idade")
        }
        else if(telefone === ""){
            return alert("Favor preencher o telefone")
        }
        else if(cidade === ""){
            return alert("Favor selecionar a cidade")
        }
        else if(estado === ""){
            return alert("Favor selecionar o estado")
        }

        obj = {
            "nome": nome.trim(),
            "email": email.trim(),
            "idade": idade.trim(),
            "telefone": telefone.trim(),
            "cidade": parseInt(cidade)
        }

    }else{
        servico = 'http://localhost:3333/instituicao';
        

        var nomeInstituicao = document.getElementById("nomeEmpresa").value;
        var cpnj = document.getElementById("cnpjEmpresa").value;
        var telefone = document.getElementById("telefoneEmpresa").value;
        var cidade = document.getElementById('comboCidade').value;debugger
        var estado = document.getElementById('comboEstado').value;

        if(nomeInstituicao === ""){
           return alert("Favor preencher o nome da empresa")
        }
        else if(cpnj === ""){
            return alert("Favor preencher o cpnj");
        }
        else if(telefone === ""){
            return alert("Favor preencher a telefone");
        }
        else if(cidade === ""){
            return alert("Favor selecionar a cidade");
        }
        else if(estado === ""){
            return alert("Favor selecionar o estado");
        }

        obj = {
            "nomeInstituicao": nomeInstituicao.trim(),
            "cpnj": cpnj.trim(),
            "telefone": telefone.trim(),
            "cidade": parseInt(cidade)
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
                if(selectTipo === "PF"){
                    this.agendarHorario(res.id_pessoa, selectTipo);
                }else{
                    this.agendarHorario(res.id_instituicao, selectTipo);
                }
               
            }else{
                alert("Falha ao realizar agendamento")
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

    return fetch('http://localhost:3333/agendamento', requisicao)
    .then(rest => rest.json())
    .then(res =>{
        if(res){
            alert("Agendamento realizado com sucesso")
            location.reload();
       
        }else{
            alert("Falha ao agendar")
        }
     
    })
}