import { SaltoPageService } from './../ServiçosPagina@injetacble/salto-page.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BotaotopoComponent } from '../botaotopo/botaotopo.component';
import { PassarImagemoutraPaginaService } from '../ServiçosPagina@injetacble/passar-imagemoutra-pagina.service';



@Component({
  selector: 'app-promocao',
  standalone: true,
  imports: [RouterLink,BotaotopoComponent],
  templateUrl: './promocao.component.html',
  styleUrl: './promocao.component.css',
})

export class PromocaoComponent implements OnInit{
[x: string]: any;

  constructor(private route: ActivatedRoute,public PassarImagemoutraPaginaService: PassarImagemoutraPaginaService,
    public SaltoPageService:SaltoPageService) { }

  ngOnInit(): void {
  
this.SaltoPageService;



    this.PassarImagemoutraPaginaService['caminhoImagemModal']; // Caminho da imagem inicial
    this.PassarImagemoutraPaginaService['caminhoImagem'];  // Caminho da imagem no modal
  }
}

