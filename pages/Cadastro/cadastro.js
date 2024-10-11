import { salvarDadosUsuario } from "../../localStorageService.js";

const CadastrarUsuario = (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    console.log(nome)
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    salvarDadosUsuario({nome, email, senha});
}

document.querySelector('form').addEventListener('submit', CadastrarUsuario);