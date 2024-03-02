import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoStorageService {

  constructor(private Router:Router) { }

  adicionarAoCarrinho(): void {
    const addclick = document.querySelector("#adicionarCarrinho");
    addclick.addEventListener("click", (event) => {
      event.preventDefault();
//pegando valor de lanche
      const LancheP = document.getElementById("LancheP")?.textContent;
      const LancheM = (document.getElementById("LancheM") as HTMLInputElement).value;
      const LancheG = (document.getElementById("LancheG") as HTMLInputElement).value;
      // pegando a quantidade de lanche

      const Qtdlache = (document.getElementById("Qtdlache") as HTMLInputElement).value;
      const Qtdlache1 = (document.getElementById("Qtdlache1") as HTMLInputElement).value;
      const Qtdlache2 = (document.getElementById("Qtdlache2") as HTMLInputElement).value;
     

//pegando complementos
      const bacon = (document.getElementById("QtdBacon") as HTMLInputElement).value;
      const carne = (document.getElementById("Qtdcarne") as HTMLInputElement).value;
      const queijo = (document.getElementById("Qtdqueijo") as HTMLInputElement).value;

     
      const Lanches = {
        LancheP: LancheP,
        LancheM: LancheM,
        LancheG: LancheG,
    
      };

      const QtdLanches = {
        Qtdlache: Qtdlache,
        Qtdlache1: Qtdlache1,
        Qtdlache2: Qtdlache2,
    
      };


      const complementos = {
        bacon: bacon,
        queijo:queijo,
        carne: carne,
      };

      let arrayLanches = JSON.parse(sessionStorage.getItem("Lanches")) || [];
      arrayLanches.push(Lanches);
      sessionStorage.setItem("Lanches", JSON.stringify(arrayLanches));

      let arrayQtdLanches = JSON.parse(sessionStorage.getItem("QtdLanches")) || [];
      arrayQtdLanches.push(QtdLanches);
      sessionStorage.setItem("QtdLanches", JSON.stringify(arrayQtdLanches));
      

      let arrayComplementos = JSON.parse(sessionStorage.getItem("Complementos")) || [];
      arrayComplementos.push(complementos);
      sessionStorage.setItem("Complementos", JSON.stringify(arrayComplementos));

      alert("Salvo com Sucesso");
    });
  }
}
