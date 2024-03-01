import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class CarrinhoCompraService {
  [x: string]: any;

  lancheP = 'R$ 18,00';
  lancheM = 'R$ 26,00';
  lancheG = 'R$ 30,00';
  valorCarneExtra = 'R$ 6,00';
  total = 'R$ 0,00';

  adicionarAoCarrinho(): void {
    // Navegar para a página de destino com os parâmetros
    // Navegar para a página de destino com os parâmetros
    this['router'].navigate(['/carro'], {
      queryParams: {
        lancheP: this.lancheP,
        lancheM: this.lancheM,
        lancheG: this.lancheG,
        valorCarneExtra: this.valorCarneExtra,
        total: this.total
      }
    });
  }
}
