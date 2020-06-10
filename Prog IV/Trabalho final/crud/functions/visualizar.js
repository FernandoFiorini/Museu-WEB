function visualizar(ex){

    var id = ex.parentNode.parentNode.cells[0].innerHTML;
    window.location.href = "view.html?id="+id;

}



function visualizarUsuario(ex){

    var id = ex.parentNode.parentNode.cells[0].innerHTML;
    window.location.href = "view.html?id="+id;

}


function findObjeto(){

    var formatString = window.location.search.substring(4, window.location.search.length);

    var codigoObjeto = parseInt(formatString);

    

    var obj = {
        "id":codigoObjeto
    }

    var objeto = {
        method: 'POST',
        body:JSON.stringify(obj),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
}

    return fetch('http://localhost:3333/pesquisaPorId',objeto)
        .then(rest => rest.json())
        .then(res =>{
            if(res){ 
                this.findImage(res);
            }else{
               alert("Falha ao abrir visualizar")
            }
         
        } )

}

function findImage(objetoParametro){

    
    var obj = {
        codigoImagem: objetoParametro.id_midia
    }

    var objeto = {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

   

    return fetch('http://localhost:3333/listarImagemObjeto', objeto)
        .then(rest => rest.json())
        .then(res => {
            if (res) {

                var buffer = res[0].bl_midia.data;        
                var b64encoded = btoa(String.fromCharCode.apply(null, buffer));
                var decode64 =  decodeURIComponent(escape(window.atob( b64encoded )));
    
             
                document.getElementById('imagemView').src= decode64;
            } else {
               return alert("Falha ao requisistar Objetos")
            }

        })
}