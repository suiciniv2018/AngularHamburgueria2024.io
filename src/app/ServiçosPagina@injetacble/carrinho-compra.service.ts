import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CarrinhoCompraService {

itens:any [] = [];


  constructor() { }


adicionarAocarrinho(item:any){
  this.itens.push(item);
}

getItens(){
  return this.itens;
}
zerarCarrinho(){
this.itens = [];
return this.itens;
}
}