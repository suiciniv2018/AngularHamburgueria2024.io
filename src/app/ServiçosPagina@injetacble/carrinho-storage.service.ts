import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoStorageService {

  constructor(public router: Router) { }

  adicionarAoCarrinho(): void {
  
    const adicionarBtn = document.querySelector<HTMLButtonElement>('#adicionarCarrinho');

    if (adicionarBtn) {
      adicionarBtn.addEventListener("click", () => {


        const lancheP = document.getElementById("LancheP")?.getAttribute("value");
        const lancheM = document.getElementById("LancheM")?.getAttribute("value");
        const lancheG = document.getElementById("LancheG")?.getAttribute("value");
        const qtdLancheP = (document.getElementById("QtdlacheP") as HTMLInputElement).value;
        const qtdLancheM = (document.getElementById("QtdlacheM") as HTMLInputElement).value;
        const qtdLancheG = (document.getElementById("QtdlacheG") as HTMLInputElement).value;
        const qtdCarne = (document.getElementById("Qtdcarne") as HTMLInputElement).value;

      
        const total =
          parseFloat(lancheP || '0') * parseInt(qtdLancheM) +
          parseFloat(lancheM || '0') * parseInt(qtdLancheP) +
          parseFloat(lancheG || '0') * parseInt(qtdLancheG) +
          parseFloat(qtdCarne || '0') * 6; 

       
        sessionStorage.setItem('lancheP', lancheP || '0');
        sessionStorage.setItem('lancheM', lancheM || '0');
        sessionStorage.setItem('lancheG', lancheG || '0');
        sessionStorage.setItem('qtdLancheP', qtdLancheP);
        sessionStorage.setItem('qtdLancheM', qtdLancheM);
        sessionStorage.setItem('qtdLancheG', qtdLancheG);
        sessionStorage.setItem('qtdCarne', qtdCarne);
        sessionStorage.setItem('total', total.toFixed(2));

        
        document.getElementById("total")!.textContent = `R$ ${total.toFixed(2)}`;

        alert("Valores adicionados ao carrinho com sucesso!");
      });
    }
  }
}
