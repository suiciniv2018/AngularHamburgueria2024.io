import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoStorageService {

  constructor() { }

  addClickHandler() {
    const clickNumber = document.querySelector<HTMLInputElement>('input[type="number"]');
    const addClick = document.querySelector<HTMLButtonElement>("#adicionarCarrinho");

    addClick?.addEventListener("click", (event: MouseEvent) => { // adiciona um evento de clicar algo na página
      event.preventDefault();

      // Lanches
      const lancheP = (document.getElementById("LancheP") as HTMLInputElement).value;
      const lancheM = (document.getElementById("LancheM") as HTMLInputElement).value;
      const lancheG = (document.getElementById("LancheG") as HTMLInputElement).value;

      // Quantidade lanches
      const Qtdlache = (document.getElementById("Qtdlache") as HTMLInputElement).value;
      const Qtdlache1 = (document.getElementById("Qtdlache1") as HTMLInputElement).value;
      const Qtdlache2 = (document.getElementById("Qtdlache2") as HTMLInputElement).value;

      // Complementos
      const bacon = (document.getElementById("QtdBacon") as HTMLInputElement).value;
      const queijo = (document.getElementById("QtdQueijo") as HTMLInputElement).value;
      const carne = (document.getElementById("Qtdcarne") as HTMLInputElement).value;

      let arrayLanches: any[] = [];
      if (JSON.parse(sessionStorage.getItem("Lanches") || "null") !== null) {
        arrayLanches.push(JSON.parse(sessionStorage.getItem("Lanches") || ""));
      }

      
      let arrayqtdLanches: any[] = [];
      if (JSON.parse(sessionStorage.getItem("Qtdlanche") || "null") !== null) {
        arrayqtdLanches.push(JSON.parse(sessionStorage.getItem("Qtdlanche") || ""));
      }

      let arrayComplementos: any[] = [];
      if (JSON.parse(sessionStorage.getItem("Complementos") || "null") !== null) {
        arrayComplementos.push(JSON.parse(sessionStorage.getItem("Complementos") || ""));
      }

      const complementos = {
        bacon: bacon,
        queijo: queijo,
        carne: carne
      };

      const Lanches = {
        Qtdlache: Qtdlache,
        Qtdlache1: Qtdlache1,
        Qtdlache2: Qtdlache2
      };

      const qtdLanches = {
        LancheP: lancheP,
        lancheM: lancheM,
        lancheG: lancheP
      };




      arrayLanches.push(Lanches);
      const LanchesJson = JSON.stringify(arrayLanches);
      sessionStorage.setItem("Lanches", LanchesJson);

      arrayqtdLanches.push(qtdLanches);
      const qtdlanchesJson = JSON.stringify(arrayqtdLanches);
      sessionStorage.setItem("qtdLanches", qtdlanchesJson);

      arrayComplementos.push(complementos);
      const compleJson = JSON.stringify(arrayComplementos);
      sessionStorage.setItem("Complementos", compleJson);

   

      alert("Salvo com Sucesso");
    });
  }
}
