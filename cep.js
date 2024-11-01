async function buscarCep() {
    let cepDigitado = document.getElementById('cep').value;
    const endpointDaApi = `https://viacep.com.br/ws/${cepDigitado}/json/`

    try {
        const res = await fetch(endpointDaApi);
        const resposta = await res.json();
        if (resposta.erro) {
            alert("CEP não encontrado.");
        } else {
            exibirDadosEmTela(resposta);
            console.log(resposta);
        }
    } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
        alert("Erro ao buscar o CEP. Tente novamente.");
    }
}

function exibirDadosEmTela(dados) {
    document.getElementById('rua').textContent = dados.logradouro || "Não disponível";
    document.getElementById('bairro').textContent = dados.bairro || "Não disponível";
    document.getElementById('localidade').textContent = dados.localidade || "Não disponível";
    document.getElementById('uf').textContent = dados.uf || "Não disponível";

    // ativando o modal
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

// desativando o modal oo clicar no X
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});


// função ao clicar em qualquer lugar da tela de saia do modal
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    buscarCep();
});
