import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router, RouterLink} from '@angular/router';
import { BotaotopoComponent } from '../botaotopo/botaotopo.component';





@Component({
  selector: 'app-mercado',
  standalone: true,
  imports: [BotaotopoComponent,RouterLink],
  templateUrl: './mercado.component.html',
  styleUrl: './mercado.component.css',
 
})
export class MercadoComponent implements OnInit  {


  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
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
  }
}