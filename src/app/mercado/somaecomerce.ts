

let valorLancheSelecionado: number = 0;
const valorCarneExtra: number = 6;

function adicionarLanche(id: string): void {
    const valorLanche: number = parseFloat((<HTMLInputElement>document.getElementById(id)).value.replace('R$ ', ''));
    valorLancheSelecionado = valorLanche;
    atualizarValorTotal();
}

function atualizarValorTotal(): void {
    const quantidadeLanche: number = parseInt((<HTMLInputElement>document.getElementById('Qtdlache')).value) || 0;
    const quantidadeCarne: number = parseInt((<HTMLInputElement>document.getElementById('Qtdcarne')).value) || 0;

    const totalLanches: number = valorLancheSelecionado * quantidadeLanche;
    const totalCarne: number = valorCarneExtra * quantidadeCarne;

    const total: number = totalLanches + totalCarne;

    (<HTMLSpanElement>document.getElementById('total')).textContent = 'R$ ' + total.toFixed(2);
}