function preencherCampos() {

    carregarCombos();

    var formatString = window.location.search.substring(4, window.location.search.length);

    var codigoObjeto = parseInt(formatString);

    var obj = {
        "id": codigoObjeto
    }

    var objeto = {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }


    return fetch('http://localhost:3333/pesquisaPorId', objeto)
        .then(rest => rest.json())
        .then(res => {
            
            if (res) {
                
                document.getElementById('nomeObjeto').value = res.tx_nomeobj;
                document.getElementById('categoriaSelect').value = res.id_categoria
                document.getElementById('colecaoSelect').value = res.id_colecao
                document.getElementById('statusSelect').value = res.id_status
                document.getElementById('secaoSelect').value = res.id_secao

            } else {
                alert("Falha ao editar")
            }

        })


}



function editar() {

    var formatString = window.location.search.substring(4, window.location.search.length);

    var codigoObjeto = parseInt(formatString);
    var nomeObj = document.getElementById('nomeObjeto').value;
    var categoriaObj = document.getElementById('categoriaSelect').value
    var colecaoObj = document.getElementById('colecaoSelect').value
    var statusObj = document.getElementById('statusSelect').value;
    var secaoObj = document.getElementById('secaoSelect').value;


    var obj = {
        "idObjeto": codigoObjeto,
        "nome":nomeObj,
        "categoria":categoriaObj, //combo tela   
        "colecao":colecaoObj,
        "status":statusObj, // combo tela
        "midia":null,
        "secao:":secaoObj,// combo tela
    }


    var objeto = {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }


    return fetch('http://localhost:3333/objetoUpdate', objeto)
        .then(rest => rest.json())
        .then(res => {
            if (res) {
                alert("Sucesso ao editar")
                listar();
            } else {
                alert("Falha ao editar")
            }

        })


}

function pageEditar(ex) {

    var id = ex.parentNode.parentNode.cells[0].innerHTML;
    window.location.href = "edit.html?id=" + id;


}

