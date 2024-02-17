import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PageinitialComponent } from './pageinitial/pageinitial.component';
import { MercadoComponent } from './mercado/mercado.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { BotaotopoComponent } from './botaotopo/botaotopo.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,RouterLink,RouterLinkActive,PageinitialComponent,MercadoComponent,CardapioComponent,BotaotopoComponent]
})

export class AppComponent {



}


  
