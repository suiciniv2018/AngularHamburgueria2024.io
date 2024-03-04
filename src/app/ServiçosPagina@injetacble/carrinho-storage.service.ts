import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoStorageService {
  constructor() { }

  adicionarAoCarrinho(): any {
    //ao clicar fazer ação
    const addclick = document.querySelector("#adicionarCarrinho");
    if (addclick) {
      addclick.addEventListener("click", (event) => {
        event.preventDefault();
      
        // Pegando valores dos lanches
        const LancheP = document.getElementById("LancheP")?.textContent;
        const LancheM = (document.getElementById("LancheM") as HTMLInputElement).value;
        const LancheG = (document.getElementById("LancheG") as HTMLInputElement).value;

        // Pegando a quantidade de lanches
        const Qtdlache = (document.getElementById("Qtdlache") as HTMLInputElement).value;
        const Qtdlache1 = (document.getElementById("Qtdlache1") as HTMLInputElement).value;
        const Qtdlache2 = (document.getElementById("Qtdlache2") as HTMLInputElement).value;

        // Pegando complementos
        const bacon = (document.getElementById("QtdBacon") as HTMLInputElement).value;
        const carne = (document.getElementById("Qtdcarne") as HTMLInputElement).value;
        const queijo = (document.getElementById("Qtdqueijo") as HTMLInputElement).value;

        //pegar total depois

        // Criando objetos para os lanches, quantidades e complementos
        const Lanches = {
          LancheP: LancheP,
          LancheM: LancheM,
          LancheG: LancheG,
        };

        const qtdLanches = {
          Qtdlache: Qtdlache,
          Qtdlache1: Qtdlache1,
          Qtdlache2: Qtdlache2,
        };

        const Complementos = {
          bacon: bacon,
          queijo: queijo,
          carne: carne,
        };

// Recuperando os arrays do localStorage
let arrayLanchesString = localStorage.getItem("Lanches");
let arrayLanches: any[] = [];

if (typeof arrayLanchesString === 'string') {
  arrayLanches = JSON.parse(arrayLanchesString);
} else {
  console.error('O valor retornado pelo localStorage não é uma string.');
}

let arrayQtdLanchesNumber = localStorage.getItem("QtdLanches");
let arrayQtdLanchesNumbers: any[] = [];

if (typeof arrayQtdLanchesNumber === 'string') {
  arrayQtdLanchesNumbers = JSON.parse(arrayQtdLanchesNumber);
} else {
  console.error('O valor retornado pelo localStorage não é uma string.');
}

let arrayComplementosString = localStorage.getItem("Complementos");
let arrayComplementos: any[] = [];

if (typeof arrayComplementosString === 'string') {
  arrayComplementos = JSON.parse(arrayComplementosString);
} else {
  console.error('O valor retornado pelo localStorage não é uma string.');
}

 
        // Adicionando os novos dados aos arrays
        arrayLanches.push(Lanches);
        arrayQtdLanchesNumbers.push(qtdLanches);
        arrayComplementos.push(Complementos);
 
        // Salvando os arrays atualizados no localStorage
        localStorage.setItem("Lanches", JSON.stringify(arrayLanches));
        localStorage.setItem("QtdLanches", JSON.stringify(arrayQtdLanchesNumbers));
        localStorage.setItem("Complementos", JSON.stringify(arrayComplementos));

        // Lógica para obter os itens do carrinho e retornar
        const itensDoCarrinhoString = localStorage.getItem('Lanches');
        if (itensDoCarrinhoString) {
          return JSON.parse(itensDoCarrinhoString)
        } else {
          const itensDoCarrinhoStrings = localStorage.getItem('Complementos');
          if (itensDoCarrinhoStrings) {
            return JSON.parse(itensDoCarrinhoStrings)
          } else {
            const itensDoCarrinhoNumber = localStorage.getItem('QtdLanches');
            if (itensDoCarrinhoNumber) {
              return JSON.parse(itensDoCarrinhoNumber)
            }
            return[];
          }
        }
      });
    } else {
      console.error("Elemento com ID 'adicionarCarrinho' não encontrado.");
    }
  }
}
