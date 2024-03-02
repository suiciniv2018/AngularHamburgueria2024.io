import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoStorageService {
  [x: string]: any;

  constructor(private router: Router) { }

  onAdicionarCarrinhoClick() {
    const lancheP = (document.getElementById("LancheP") as HTMLInputElement).value;
    const qtdlacheP = (document.getElementById("Qtdlache") as HTMLInputElement).value;
    const lancheM = (document.getElementById("LancheM") as HTMLInputElement).value;
    const qtdlacheM = (document.getElementById("Qtdlache1") as HTMLInputElement).value;
    const lancheG = (document.getElementById("LancheG") as HTMLInputElement).value;
    const qtdlacheG = (document.getElementById("Qtdlache2") as HTMLInputElement).value;
    const qtdCarne = (document.getElementById("Qtdcarne") as HTMLInputElement).value;
    const qtdBacon = (document.getElementById("QtdBacon") as HTMLInputElement).value;
    const qtdQueijo = (document.getElementById("QtdQueijo") as HTMLInputElement).value;
    const total = (document.getElementById("total") as HTMLSpanElement).innerText;

    // Armazenar os valores capturados
    const itemsSelecionados = {
      lancheP: lancheP,
      qtdlacheP: qtdlacheP,
      lancheM: lancheM,
      qtdlacheM: qtdlacheM,
      lancheG: lancheG,
      qtdlacheG: qtdlacheG,
      qtdCarne: qtdCarne,
      qtdBacon: qtdBacon,
      qtdQueijo: qtdQueijo,
      total: total
    };

    // Navegar para a página do carrinho e passar os valores como parâmetro na URL
    // Navegar para a página do carrinho e passar os valores como parâmetro na URL
    this['router'].navigate(['/carrinho'], { state: { itemsSelecionados: itemsSelecionados } });
  }
}