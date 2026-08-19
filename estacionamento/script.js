
        
        let estacionamento = []

    function adicionarCarro() {
            
            let inputPlaca = document.getElementById('placa')
            let inputCor = document.getElementById('cor')
            let inputMarca = document.getElementById('marca')

            let placa = inputPlaca.value
            let cor = inputCor.value
            let marca = inputMarca.value

            
            if (placa === '' || cor === '' || marca === '') {
                alert('Por favor, preencha todos os campos!')
                return
            }

           
            let carro = {
                placa: placa,
                cor: cor,
                marca: marca
            }

            estacionamento.push(carro)

            
            inputPlaca.value = ''
            inputCor.value = ''
            inputMarca.value = ''

            
            atualizarInterface()
    }

    function atualizarInterface() {
    let lista = document.getElementById('listaEstacionamento');
    let total = document.getElementById('totalVagas');

    // Limpa o conteúdo atual da lista
    lista.innerHTML = '';

    // Atualiza o contador de vagas se o elemento existir
    if (total) {
        total.innerText = estacionamento.length;
    }

    // Percorre o array de veículos para criar a estrutura HTML
    for (let i = 0; i < estacionamento.length; i++) {
        let veiculo = estacionamento[i];
        let item = document.createElement('li');

        item.innerHTML = `
            <div class="card-veiculo">
                <div class="card-imagem">
                    <img src="img/carro.jpg" alt="${veiculo.marca}">
                </div>
                <div class="card-info">
                    <h3>${veiculo.placa}</h3>
                    <p><strong>COR:</strong> ${veiculo.cor}</p>
                    <p><strong>MODELO:</strong> ${veiculo.marca}</p>
                    <button class="btn-remover" onclick="removerVeiculo(${i})">SAÍDA</button>
                </div>
            </div>
        `;

        lista.appendChild(item);
    }
}