import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarrinhoStorageService } from '../ServiçosPagina@injetacble/carrinho-storage.service';
import { NgFor } from '@angular/common';
import { MercadoComponent } from '../mercado/mercado.component';


@Component({
  selector: 'app-carrinhocompra',
  standalone: true,
  imports: [RouterLink,NgFor, MercadoComponent],
  templateUrl: './carrinhocompra.component.html',
  styleUrl: './carrinhocompra.component.css',
  
  
})
export class CarrinhocompraComponent  implements OnInit  {

  lanches!: any[];
  qtdLanches!: any[];
  complementos!: any[];

  constructor(private route: ActivatedRoute,public carrinhoStorageService: CarrinhoStorageService) { }

  itemsSelecionados: any;


  ngOnInit(): void {
    // Recuperar os valores passados como parâmetro na URL
    this.itemsSelecionados = this.route.snapshot.paramMap.get('itemsSelecionados');
    console.log(this.itemsSelecionados); 
  }
}