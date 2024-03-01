import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, RouterLink} from '@angular/router';
import { BotaotopoComponent } from '../botaotopo/botaotopo.component';
import { CarrinhocompraComponent } from '../carrinhocompra/carrinhocompra.component';
import { PassarImagemoutraPaginaService } from '../ServiçosPagina@injetacble/passar-imagemoutra-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mercado',
  standalone: true,
  imports: [BotaotopoComponent,RouterLink,CarrinhocompraComponent,],
  templateUrl: './mercado.component.html',
  styleUrl: './mercado.component.css'
})

export class MercadoComponent implements OnInit  {
  [x: string]: any;

  
 

  constructor(private Router: ActivatedRoute,public PassarImagemoutraPaginaService: PassarImagemoutraPaginaService,
    private router: Router) { }


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

    adicionarAoCarrinho(): void {
      const lancheP = 'R$ 18,00';
      const lancheM = 'R$ 26,00';
      const lancheG = 'R$ 30,00';
      const Qtdlache = 'R$ 0';
      const Qtdlache1 = 'R$ 0';
      const Qtdlache2 = 'R$ 0';
      const valorCarneExtra = 'R$ 6,00';
      const total = 'R$ 0,00';

   
        localStorage.setItem('lancheP', 'R$ 18,00');
        localStorage.setItem('lancheM', 'R$ 26,00');
        localStorage.setItem('lancheG', 'R$ 30,00');
        localStorage.setItem('Qtdlache', 'R$ 0');
        localStorage.setItem('Qtdlache1', 'R$ 0');
        localStorage.setItem('Qtdlache2', 'R$ 0');
        localStorage.setItem('valorCarneExtra', 'R$ 6,00');
        localStorage.setItem('total', 'R$ 0,00');

        this['router'].navigate(['/carro']);
    }}