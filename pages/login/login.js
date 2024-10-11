const LoginUsuario = (e) => {
    e.preventDefault();

    const usuario = JSON.parse(localStorage.getItem("usuario"))

    let email = document.getElementById('emailLogin').value;
    let senha = document.getElementById('senhaLogin').value;

    if(email == usuario.email && senha == usuario.senha){
        console.log('login efetuado com sucesso!!')
    } else{
        console.log('login não efetuado!!')
    }

}

document.querySelector('form').addEventListener('submit', LoginUsuario)