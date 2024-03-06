import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarrinhoStorageService } from '../ServiçosPagina@injetacble/carrinho-storage.service';
import { NgFor,NgIf } from '@angular/common';
import { MercadoComponent } from '../mercado/mercado.component';


@Component({
  selector: 'app-carrinhocompra',
  standalone: true,
  imports: [RouterLink,NgFor,NgIf, MercadoComponent],
  templateUrl: './carrinhocompra.component.html',
  styleUrl: './carrinhocompra.component.css',
  
  
})
export class CarrinhocompraComponent  implements OnInit  {
  itensDoCarrinho: any[] = [];

  constructor(private route: ActivatedRoute,private carrinhoStorageService: CarrinhoStorageService) { }




  ngOnInit(): void {
    // Recuperar os valores passados como parâmetro na URL
    
    this.itensDoCarrinho = this.carrinhoStorageService.AdicionarCarrinho();
  }
}



