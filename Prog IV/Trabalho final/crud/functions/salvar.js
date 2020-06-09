function salvar() {
debugger

var soruce = document.getElementById("arquivoObjeto");
    var arquivo = document.getElementById("arquivoObjeto").files[0];

    var reader  = new FileReader();

    reader.onloadend = function () {
        soruce.src = reader.result;
    }

    if (arquivo) {
        reader.readAsDataURL(arquivo);
    } else {
        soruce.src = "";
    }

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
        "midia": null,
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
        .then(res =>{
            if(res){ 
                alert("Salvo com sucesso");
                window.location.href='index.html' ;
            }else{
               alert("Falha ao salvar")
            }
         
        } )


}

