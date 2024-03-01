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

    // Defina as variáveis ​​que deseja passar para a outra página
    lancheP = 'R$ 18,00';
    lancheM = 'R$ 26,00';
    lancheG = 'R$ 30,00';
    Qtdlache = 0;
    Qtdlache1= 0;
    Qtdlache2 =0;
    valorCarneExtra = 'R$ 6,00';
    total = 'R$ 0,00';
  
 

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

    adicionarAoCarrinho(): void {
      // Navegar para a página de destino com os parâmetros
      // Navegar para a página de destino com os parâmetros
      this['Router'].navigate(['/carro'], {
        queryParams: {
          lancheP: this.lancheP,
          lancheM: this.lancheM,
          lancheG: this.lancheG,
          Qtdlache: this.Qtdlache,
          Qtdlache1: this.Qtdlache1,
          Qtdlache2: this.Qtdlache,
          valorCarneExtra: this.valorCarneExtra,
          total: this.total
        }
      });
    }
  }