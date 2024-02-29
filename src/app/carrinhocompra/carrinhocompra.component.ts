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
  styleUrl: './carrinhocompra.component.css'
})
export class CarrinhocompraComponent {

  items: { nome: string, preco: number, quantidade: number }[] = [];
  total!: number;

  constructor(private CarrinhoCompraService: CarrinhoCompraService) { }

  ngOnInit(): void {
    this.items = this.CarrinhoCompraService.getItems();
    this.total = this.CarrinhoCompraService.getTotal();
  }
}





