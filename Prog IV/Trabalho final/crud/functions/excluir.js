function excluir(ex) {

    var id = ex.parentNode.parentNode.cells[0].innerHTML;

    var obj = {
        "idObjeto": parseInt(id)
    }



    var objeto = {
        method: 'DELETE',
        body: JSON.stringify(obj),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }


    return fetch('http://localhost:3333/objetoDelete', objeto)
        .then(rest => rest.json())
        .then(res => {
            if (res) {
                alert("Excluido com sucesso!")
                location.reload();
                listar();
            } else {
                alert("Falha ao Excluir")
            }

        })


}

