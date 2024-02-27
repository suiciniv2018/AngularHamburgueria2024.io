    // Obter o valor fixo de cada lanche
    let valorLancheP = 18;
    let valorLancheM = 26;
    let valorLancheG = 30;
    let valorCarneExtra = 6;
    let ValorBaconExtra = 6;
    let ValorQueijoExtra = 6;


function atualizarValorTotal() {
    // Obter os valores selecionados e convertê-los para números
    const quantidadeLancheP = parseInt(document.getElementById('Qtdlache').value);
    const quantidadeLancheM = parseInt(document.getElementById('Qtdlache1').value);
    const quantidadeLancheG = parseInt(document.getElementById('Qtdlache2').value);
    const quantidadeCarne = parseInt(document.getElementById('Qtdcarne').value);
    const quantidadeBacon = parseInt(document.getElementById('QtdBacon').value);
    const quantidadeQueijo = parseInt(document.getElementById('QtdQueijo').value)



    // Calcular o subtotal de cada lanche multiplicando a quantidade pelo valor
    const subtotalLancheP = quantidadeLancheP * valorLancheP;
    const subtotalLancheM = quantidadeLancheM * valorLancheM;
    const subtotalLancheG = quantidadeLancheG * valorLancheG;

    // Calcular o subtotal dos complementos
    const subtotalCarneExtra = quantidadeCarne * valorCarneExtra;
    const subtotalBaconExtra = quantidadeBacon * ValorBaconExtra;
    const subtotalQueijoExtra = quantidadeQueijo * ValorQueijoExtra;

    // Calcular o total somando os subtotais
    const total = subtotalLancheP + subtotalLancheM + subtotalLancheG + subtotalCarneExtra + subtotalBaconExtra + subtotalQueijoExtra;

    // Exibir o total no elemento HTML
    document.getElementById('total').textContent = 'R$ ' + total.toFixed(2); // Formatar o total para exibir com duas casas decimais
}

