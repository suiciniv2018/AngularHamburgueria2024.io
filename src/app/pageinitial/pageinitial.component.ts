
import {AfterViewInit, Component, OnInit,  } from '@angular/core';
import { ActivatedRoute, RouterLink, } from '@angular/router';
import { BotaotopoComponent } from '../botaotopo/botaotopo.component';

declare var $: any;



@Component({
  selector: 'app-pageinitial',
  standalone: true,
  imports: [RouterLink,BotaotopoComponent],
  templateUrl: './pageinitial.component.html',
  styleUrl: './pageinitial.component.css',
  
  
})


export class PageinitialComponent implements OnInit  {

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
