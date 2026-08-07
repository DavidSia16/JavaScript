    function calcularOrçamento() {
    // 1. Entrada e tratamento de dados do usuário
    let nome = window.prompt("Qual é o seu nome?");
    if (!nome) return; // Cancela se o usuário fechar o prompt

    let salarioInput = window.prompt("Informe o seu salário mensal (R$):");
    let despesasInput = window.prompt("Informe o total das suas despesas mensais (R$):");

    // 2. Conversão de String para Número
    let salario = Number(salarioInput.replace(',', '.'));
    let despesas = Number(despesasInput.replace(',', '.'));

    // Validação de entrada
    if (isNaN(salario) || isNaN(despesas)) {
        alert("Por favor, digite valores numéricos válidos.");
        return;
    }

    // 3. Processamento de dados
    let saldo = salario - despesas;
    let porcentagemGasta = (despesas / salario) * 100;

    // 4. Formatação dos dados em Moeda (BRL)
    let salarioFormatado = salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let despesasFormatadas = despesas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let saldoFormatado = saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // 5. Exibição na tela
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = `
        <h2>Olá, <strong>${nome.toUpperCase()}</strong>!</h2>
        <p>💰 **Salário:** ${salarioFormatado}</p>
        <p>💸 **Despesas:** ${despesasFormatadas} (${porcentagemGasta.toFixed(1)}% da renda)</p>
        <p>📊 **Saldo Restante:** <strong style="color: ${saldo >= 0 ? 'green' : 'red'};">${saldoFormatado}</strong></p>
    `;
}