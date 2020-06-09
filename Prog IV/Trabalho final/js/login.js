function logarUsuario() {

    var login = document.getElementById("login").value;
    var senha = document.getElementById("password").value;

    var obj = {
        "login": login.trim(),
        "senha": senha.trim()
    }

    var objeto = {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

    return fetch('http://localhost:3333/user', objeto)
        .then(rest => rest.json())
        .then(res =>{
            if(res){ 
                console.log("Login efetuado com sucesso")
                window.location.href='crud/index.html' ;
            }else{
               alert("Login ou senha inválidos")
            }
         
        } )


}

