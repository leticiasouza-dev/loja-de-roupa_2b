export const salvarDadosUsuario = (dados) => {
    localStorage.setItem("usuario", JSON.stringify(dados));
    console.log(dados);
}
  