function salvarManutencao(){
    var formatString = window.location.search.substring(4, window.location.search.length);

    var codigoObjeto = parseInt(formatString);

    var dataInicio = document.getElementById("dateInicioSelect").value;
    var dataFim = document.getElementById("dateFimSelect").value;


    var obj = {
        "dataInicio": dataInicio,
        "dataFim": dataFim,
        "idObjeto": codigoObjeto
    }


debugger
    var objeto = {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }


    return fetch('http://localhost:3333/manutencao', objeto)
        .then(rest => rest.json())
        .then(res => {
            if (res) {
                alert("Entrou em manutencao!")
                window.location.href = "index.html";

            } else {
                alert("Falha ao Excluir")
            }

        })

}