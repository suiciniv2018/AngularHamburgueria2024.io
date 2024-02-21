var valorLancheSelecionado = 0;
var valorCarneExtra = 6;
function adicionarLanche(id) {
    var valorLanche = parseFloat(document.getElementById(id).value.replace('R$ ', ''));
    valorLancheSelecionado = valorLanche;
    atualizarValorTotal();
}
function atualizarValorTotal() {
    var quantidadeLanche = parseInt(document.getElementById('Qtdlache').value) || 0;
    var quantidadeCarne = parseInt(document.getElementById('Qtdcarne').value) || 0;
    var totalLanches = valorLancheSelecionado * quantidadeLanche;
    var totalCarne = valorCarneExtra * quantidadeCarne;
    var total = totalLanches + totalCarne;
    document.getElementById('total').textContent = 'R$ ' + total.toFixed(2);
}

