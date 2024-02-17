import { RouterLink } from '@angular/router';
import { BotaotopoComponent } from './../botaotopo/botaotopo.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [BotaotopoComponent,RouterLink],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css'
})
export class CardapioComponent {

}
