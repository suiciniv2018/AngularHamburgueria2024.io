
import { Component } from '@angular/core';
import { BotaotopoComponent } from '../botaotopo/botaotopo.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [BotaotopoComponent,RouterLink],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css',
  
})
export class GaleriaComponent {

}
