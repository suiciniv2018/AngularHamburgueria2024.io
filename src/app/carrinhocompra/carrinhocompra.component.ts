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
  itemsSelecionados: any;


  constructor(private route: ActivatedRoute,private carrinhoStorageService: CarrinhoStorageService) { }




  ngOnInit(): void {
    // Recuperar os valores passados como parâmetro na URL
    this.itemsSelecionados = this.route.snapshot.paramMap.get('itemsSelecionados');
    console.log(this.itemsSelecionados); 
  }
}


