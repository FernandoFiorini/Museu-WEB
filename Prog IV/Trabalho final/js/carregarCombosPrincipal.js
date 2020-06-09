function carregarEstado() {
    
    var objeto = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

    return fetch('http://localhost:3333/listarEstados',objeto)
        .then(rest => rest.json())
        .then(res =>{
            if(res){ 

                var selectBox = document.getElementById('comboEstado');

                for(var i = 0, l = res.length; i < l; i++){
                var option = res[i];
                selectBox.options.add( new Option(option.tx_estado, option.id_estado) );
                }

               
            }else{
               alert("Falha ao requisistar Objetos")
            }
         
        } )

}

function carregarCidade(codigo){
    var codigoE = codigo.value;
    
    var obj ={
        "codigoEstado":codigoE
    }

    var objeto = {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

    return fetch('http://localhost:3333/listarCidadePorEstado',objeto)
        .then(rest => rest.json())
        .then(res =>{
            if(res){ 

                var selectBox = document.getElementById('comboCidade');

                for(var i = 0, l = res.length; i < l; i++){
                var option = res[i];
                selectBox.options.add( new Option(option.tx_nomecid, option.id_cidade) );
                }

               
            }else{
               alert("Falha ao requisistar Objetos")
            }
         
        } )

}


function ajustarCLS(valor){

    if(valor === "PF"){
        var estiloPessoa = document.getElementById("pessoaDiv").style.display="block";
        var estiloEmpresa = document.getElementById("empresaDiv").style.display="none";
    }else{
        var estiloPessoa = document.getElementById("pessoaDiv").style.display="none";
        var estiloEmpresa = document.getElementById("empresaDiv").style.display="block";
    }
   
 
  
}
