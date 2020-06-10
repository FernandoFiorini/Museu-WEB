
function getBase64() {
    
    var source = document.querySelector('#arquivoObjeto').files[0];
    if(source == null){
        return alert("Favor selecionar uma imagem")
    }
    var reader = new FileReader();
    reader.readAsDataURL(source);
    reader.onload = function () {
        
        return salvarImagem(reader.result);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

function salvarImagem(imagem64){
    


    const obj = {
        "base64": imagem64,
 
    }

    var objeto = {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

    return fetch('http://localhost:3333/midia', objeto)
        .then(rest => rest.json())
        .then(res => {
            if (res) {
                
                this.salvar(res.id_midia)
                
            } else {
                alert("Falha ao salvar")
            }

        })
}

function salvar(idFoto) {

    
debugger
    var nome = document.getElementById("inputNome").value;
    var categoria = document.getElementById("categoriaSelect").value;
    var status = document.getElementById("statusSelect").value;
    var colecao = document.getElementById("colecaoSelect").value;
    var secao = document.getElementById("secaoSelect").value;

    const obj = {
        "nome": nome,
        "categoria": parseInt(categoria), //combo tela   
        "colecao": parseInt(colecao),
        "status": parseInt(status), // combo tela
        "midia": parseInt(idFoto),
        "secao": parseInt(secao),// combo tela

    }

    var objeto = {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

    return fetch('http://localhost:3333/salvarObjeto', objeto)
        .then(rest => rest.json())
        .then(res => {
            if (res) {
                alert("Salvo com sucesso");
                window.location.href = 'index.html';
            } else {
                alert("Falha ao salvar")
            }

        })


}

