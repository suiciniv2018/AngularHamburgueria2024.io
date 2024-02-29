import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MercadoComponent } from '../mercado/mercado.component';
import{CarrinhoCompraService} from '../ServiçosPagina@injetacble/carrinho-compra.service'
import { NgFor } from '@angular/common';


@Component({
  selector: 'carrinhocompra',
  standalone: true,
  imports: [RouterLink,MercadoComponent,NgFor],
  templateUrl: './carrinhocompra.component.html',
  styleUrl: './carrinhocompra.component.css',
 template:`
     
  <div>
  <h2>Suas Compras</h2>
  <ul>
    <li *ngFor="let item of items">
      Lanche: {{ item.lanche }} - Quantidade: {{ item.quantidade }}
    </li>
  </ul>
  <p>Total de Itens no Carrinho: {{ totalItens }}</p>
</div>
`
})
export class CarrinhocompraComponent {

  items: any[];
  totalItens: number = 0;

  constructor(private carrinhoService: CarrinhoCompraService) {
    this.items = this.carrinhoService.getItens();
    this.calcularTotalItens();
  }

  calcularTotalItens() {
    this.totalItens = this.items.reduce((total, item) => total + item.quantidade, 0);
  }
}



