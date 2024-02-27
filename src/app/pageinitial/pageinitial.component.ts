
import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute, RouterLink, } from '@angular/router';
import { BotaotopoComponent } from '../botaotopo/botaotopo.component';
import {SlidesMovService} from '../ServiçosPagina@injetacble/slides-mov.service';
import{SaltoPageService} from'../ServiçosPagina@injetacble/salto-page.service';
import{SaltoabaEspecificaService} from'../ServiçosPagina@injetacble/saltoaba-especifica.service';
declare var $: any;


@Component({
  selector: 'app-pageinitial',
  standalone: true,
  imports: [RouterLink,BotaotopoComponent],
  templateUrl: './pageinitial.component.html',
  styleUrl: './pageinitial.component.css',
  
  
})


export class PageinitialComponent implements OnInit  {

  constructor(private route: ActivatedRoute,public SlidesMovService: SlidesMovService, 
    public SaltoPageService:SaltoPageService, public SaltoabaEspecificaService:SaltoabaEspecificaService) { }

  ngOnInit(): void {
    //chamando serviço Salto de página
this.SaltoPageService;
//chamando serviço slide
    this.SlidesMovService;
  }
  //chamando serviço saltoabaespecifica
  scrollToSection(selector: string): void {
    this.SaltoabaEspecificaService.scrollToElement(selector);
  }
}