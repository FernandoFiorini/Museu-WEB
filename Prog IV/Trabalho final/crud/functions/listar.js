function listar() {

    var retorno = [];

    var objeto = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }


    return fetch('http://localhost:3333/listarObjetos', objeto)
        .then(rest => rest.json())
        .then(res => {
            if (res) {
                
                retorno = res;
                if (retorno != null) {
                    var t = "";
                    for (var i = 0; i < retorno.length; i++) {
                        var tr = "<tr>";
                        tr += "<td>" + retorno[i].id_objeto + "</td>";
                        tr += "<td>" + retorno[i].tx_nomeobj + "</td>";
                        tr += "<td>" + retorno[i].id_categoria + "</td>";
                        tr += "<td>" + retorno[i].id_colecao + "</td>";
                        tr += "<td>" + retorno[i].id_status + "</td>";
                        tr += "<td>" + retorno[i].id_secao + "</td>";
                        tr += "<td>" + '<a class="btn btn-success btn-xs" onclick="visualizar(this)">Visualizar</a>' + " " + '<a class="btn btn-warning btn-xs" onclick="pageEditar(this)">Editar</a>' + " " + '<a class="btn btn-danger btn-xs"  href="#" data-toggle="modal" data-target="#delete-modal" onclick="excluir(this)">Excluir</a>' + "</td>";
                        tr += "</tr>";
                        t += tr;
                    }
                    document.getElementById("tabelaCrud").innerHTML += t;

                }



            } else {
                alert("Falha ao requisistar Objetos")
            }

        })


}

function pesquisar() {

    var textoPesquisa = document.getElementById("search").value

    var obj = {
        "pesquisa": textoPesquisa
    }
    if (textoPesquisa == null) {
        listar();
    }

    var objeto = {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

    return fetch('http://localhost:3333/pesquisaObjeto', objeto)
        .then(rest => rest.json())
        .then(res => {
            if (res) {
                $('#idObjeto').html(res.id_objeto);
                $('#nomeObjeto').html(res.tx_nomeobj);
                $('#categoriaObjeto').html(res.id_categoria);
                $('#colecaoObjeto').html(res.id_colecao);
                $('#statusObjeto').html(res.id_status);
                $('#secaoObjeto').html(res.id_secao);


            } else {
                alert("Nenhum objeto com este nome, informe novamente!")
            }

        })
}

function listarUsuario() {

    var retorno = [];

    var objeto = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }


    return fetch('http://localhost:3333/listarObjetos', objeto)
        .then(rest => rest.json())
        .then(res => {
            if (res) {
                
                retorno = res;
                if (retorno != null) {
                    var t = "";
                    for (var i = 0; i < retorno.length; i++) {
                        var tr = "<tr>";
                        tr += "<td>" + retorno[i].id_objeto + "</td>";
                        tr += "<td>" + retorno[i].tx_nomeobj + "</td>";
                        tr += "<td>" + retorno[i].id_categoria + "</td>";
                        tr += "<td>" + retorno[i].id_colecao + "</td>";
                        tr += "<td>" + retorno[i].id_status + "</td>";
                        tr += "<td>" + retorno[i].id_secao + "</td>";
                        tr += "<td>" + '<a class="btn btn-success btn-xs" onclick="visualizar(this)">Visualizar</a>' + "</td>";
                        tr += "</tr>";
                        t += tr;
                    }
                    document.getElementById("tabelaCrud").innerHTML += t;

                }



            } else {
                alert("Falha ao requisistar Objetos")
            }

        })


}

