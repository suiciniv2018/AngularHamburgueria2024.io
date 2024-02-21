import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BotaotopoComponent } from '../botaotopo/botaotopo.component';

@Component({
  selector: 'app-promocao',
  standalone: true,
  imports: [RouterLink,BotaotopoComponent],
  templateUrl: './promocao.component.html',
  styleUrl: './promocao.component.css',
})
export class PromocaoComponent {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obter o ID do elemento da URL
    this.route.fragment.subscribe((fragment: any) => {
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

