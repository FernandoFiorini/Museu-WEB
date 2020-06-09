function carregarCombos() {

    this.comboCategoria();
    this.comboColecao();
    this.comboSecao();
    this.comboStatus();


}

function comboSecao() {

    var objeto = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
 


    return fetch('http://localhost:3333/comboSecao',objeto)
        .then(rest => rest.json())
        .then(res =>{
            if(res){ 

                var selectBox = document.getElementById('secaoSelect');

                for(var i = 0, l = res.length; i < l; i++){
                var option = res[i];
                selectBox.options.add( new Option(option.tx_descsecao, option.id_secao) );
                }

               
            }else{
               alert("Falha ao requisistar Objetos")
            }
         
        } )


}

function comboColecao() {

   
 
    var objeto = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

    return fetch('http://localhost:3333/comboColecao',objeto)
        .then(rest => rest.json())
        .then(res =>{
            if(res){ 

                
                var selectBox = document.getElementById('colecaoSelect');

                for(var i = 0, l = res.length; i < l; i++){
                    var option = res[i];
                    selectBox.options.add( new Option(option.tx_nomecol, option.id_colecao) );
                }

               
            }else{
               alert("Falha ao requisistar Objetos")
            }
         
        } )


}

function comboCategoria() {

    var objeto = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
 


    return fetch('http://localhost:3333/comboCategoria',objeto)
        .then(rest => rest.json())
        .then(res =>{
            if(res){ 
                
                var selectBox = document.getElementById('categoriaSelect');

                for(var i = 0, l = res.length; i < l; i++){
                    var option = res[i];
                    selectBox.options.add( new Option(option.tx_categoria, option.id_categoria) );
                }
            }else{
               alert("Falha ao requisistar Objetos")
            }
         
        } )


}

function comboStatus() {

   
    var objeto = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
 

    return fetch('http://localhost:3333/comboStatus',objeto)
        .then(rest => rest.json())
        .then(res =>{
            if(res){ 
                
               
                var selectBox = document.getElementById('statusSelect');

                for(var i = 0, l = res.length; i < l; i++){
                    var option = res[i];
                    selectBox.options.add( new Option(option.tx_status, option.id_status) );
                }
               
            }else{
               alert("Falha ao requisistar Objetos")
            }
         
        } )


}

