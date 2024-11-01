async function buscarCep() {
    let cepDigitado = document.getElementById('cep').value;
    const endpointDaApi = `https://viacep.com.br/ws/${cepDigitado}/json/`

    const res = await fetch(endpointDaApi);
    const resposta = await res.json()

    exibirDadosEmTela(resposta);

    console.log(resposta)
}

function exibirDadosEmTela (dados){
    let nomeRua =  document.getElementById('rua');
    nomeRua.textContent =  dados.logradouro;

    let nomeBairro = document.getElementById('bairro');
    nomeBairro.textContent = dados.bairro;

    let nomeLocalidade = document.getElementById('localidade')
    nomeLocalidade.textContent = dados.localidade;

}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); 
    buscarCep();
   
})


