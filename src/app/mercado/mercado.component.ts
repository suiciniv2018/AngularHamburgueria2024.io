import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, RouterLink} from '@angular/router';
import { BotaotopoComponent } from '../botaotopo/botaotopo.component';
import { CarrinhocompraComponent } from '../carrinhocompra/carrinhocompra.component';
import { PassarImagemoutraPaginaService } from '../ServiçosPagina@injetacble/passar-imagemoutra-pagina.service';
import { Router } from '@angular/router';
import {CarrinhoStorageService} from '../ServiçosPagina@injetacble/carrinho-storage.service'
;@Component({
  selector: 'app-mercado',
  standalone: true,
  imports: [BotaotopoComponent,RouterLink,CarrinhocompraComponent,],
  templateUrl: './mercado.component.html',
  styleUrl: './mercado.component.css'
})

export class MercadoComponent implements OnInit  {
  [x: string]: any;

  
 

  constructor(private Router: ActivatedRoute,public PassarImagemoutraPaginaService: PassarImagemoutraPaginaService,
    private router: Router, public CarrinhoStorageService:CarrinhoStorageService) { }


  ngOnInit(): void {

    // Obter o ID do elemento da URL
   // Obter o ID do elemento da URL
   this.Router.fragment.subscribe(fragment => {
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


  onAdicionarCarrinhoClick( ) {
    //chamando o metodo service.
    this['carrinhoStorageService'].onAdicionarCarrinhoClick();   
  }
}