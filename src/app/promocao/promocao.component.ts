import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotaotopoComponent } from '../botaotopo/botaotopo.component';

@Component({
  selector: 'app-promocao',
  standalone: true,
  imports: [RouterLink,BotaotopoComponent],
  templateUrl: './promocao.component.html',
  styleUrl: './promocao.component.css'
})
export class PromocaoComponent {

}
