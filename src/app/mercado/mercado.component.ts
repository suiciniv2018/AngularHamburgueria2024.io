import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, RouterLink} from '@angular/router';
import { BotaotopoComponent } from '../botaotopo/botaotopo.component';
import { CarrinhocompraComponent } from '../carrinhocompra/carrinhocompra.component';
import { PassarImagemoutraPaginaService } from '../ServiçosPagina@injetacble/passar-imagemoutra-pagina.service';
import{CarrinhoCompraService} from '../ServiçosPagina@injetacble/carrinho-compra.service'

@Component({
  selector: 'app-mercado',
  standalone: true,
  imports: [BotaotopoComponent,RouterLink,CarrinhocompraComponent,],
  templateUrl: './mercado.component.html',
  styleUrl: './mercado.component.css'
})

export class MercadoComponent implements OnInit  {
[x: string]: any;

lanche:string|any;
  quantidade:number|any;

 

  constructor(private route: ActivatedRoute,public PassarImagemoutraPaginaService: PassarImagemoutraPaginaService,
    public CarrinhoCompraService:CarrinhoCompraService) { }


  ngOnInit(): void {

    // Obter o ID do elemento da URL
   // Obter o ID do elemento da URL
   this.route.fragment.subscribe(fragment => {
    if (fragment) {
      const element = document.querySelector(`#${fragment}`);
      if (element) {
        // Rolar até o elemento
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    }
  });

  this.PassarImagemoutraPaginaService['caminhoImagemModal']; // Caminho da imagem inicial
    this.PassarImagemoutraPaginaService['caminhoImagem'];  // Caminho da imagem no modal
  }

  adicionarAocarrinho(){

this.CarrinhoCompraService.adicionarAocarrinho({lanche:this.lanche, quantidade:this.quantidade });
this.lanche = 'S';
this.quantidade = 0;

  }
  
}


