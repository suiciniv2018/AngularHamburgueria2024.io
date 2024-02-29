import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class CarrinhoCompraService {
  [x: string]: any;

  items: { nome: string, preco: number, quantidade: number }[] = [];

  constructor() { }

  adicionarAocarrinho(item: { nome: string, preco: number, quantidade: number }) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
  }
}