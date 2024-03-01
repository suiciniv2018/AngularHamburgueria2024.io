import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MercadoComponent } from '../mercado/mercado.component';


@Component({
  selector: 'app-carrinhocompra',
  standalone: true,
  imports: [RouterLink,MercadoComponent],
  templateUrl: './carrinhocompra.component.html',
  styleUrl: './carrinhocompra.component.css',
})
export class CarrinhocompraComponent  implements OnInit  {

  lancheP!: string;
  lancheM!: string;
  lancheG!: string;
  Qtdlache!:string;
  Qtdlache1!:string;
  Qtdlache2!:string;
  valorCarneExtra!: string;
  total!: string;

  constructor() { }

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      this.lancheP = localStorage.getItem('lancheP') || '';
      this.lancheM = localStorage.getItem('lancheM') || '';
      this.lancheG = localStorage.getItem('lancheG') || '';
      this.Qtdlache = localStorage.getItem('Qtdlache') || '';
      this.Qtdlache1 = localStorage.getItem('Qtdlache1') || '';
      this.Qtdlache2 = localStorage.getItem('Qtdlache2') || '';
      this.valorCarneExtra = localStorage.getItem('valorCarneExtra') || '';
      this.total = localStorage.getItem('total') || '';
    } else {
      console.error('O objeto localStorage não está disponível neste ambiente.');
    }
  }
}






