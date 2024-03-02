import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MercadoComponent } from '../mercado/mercado.component';
import { CarrinhoStorageService } from '../ServiçosPagina@injetacble/carrinho-storage.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-carrinhocompra',
  standalone: true,
  imports: [RouterLink,MercadoComponent,NgFor],
  templateUrl: './carrinhocompra.component.html',
  styleUrl: './carrinhocompra.component.css',
  template: `
  
  <html>
    
<body>

<div>
  <h2>Lanches</h2>
  <div *ngFor="let lanche of lanches">
    <p>{{ lanche.Qtdlache }} - {{ lanche.Qtdlache1 }} - {{ lanche.Qtdlache2 }}</p>
  </div>
</div>
  <div>
  <h2>Quantidade de Lanches</h2>
  <div *ngFor="let qtdLanche of qtdLanches">
    <p>{{ qtdLanche.LancheP }} - {{ qtdLanche.lancheM }} - {{ qtdLanche.lancheG }}</p>
  </div>
  </div>
  <div>
  <h2>Complementos</h2>
  <div *ngFor="let complemento of complementos">
    <p>Bacon: {{ complemento.bacon }}</p>
    <p>Queijo: {{ complemento.queijo }}</p>
    <p>Carne: {{ complemento.carne }}</p>
  </div>
    
  </div>
  
</body>
  </html>
  
  `
})
export class CarrinhocompraComponent  implements OnInit  {


  
  lanches!: any[];
  qtdLanches!: any[];
  complementos!: any[];

  constructor(private carrinhoStorageService: CarrinhoStorageService) { }

  ngOnInit(): void {
    this.obterValoresDoCarrinho();
  }

  obterValoresDoCarrinho() {
    this.lanches = JSON.parse(sessionStorage.getItem("Lanches") || "[]");
    this.qtdLanches = JSON.parse(sessionStorage.getItem("qtdLanches") || "[]");
    this.complementos = JSON.parse(sessionStorage.getItem("Complementos") || "[]");
  }
}