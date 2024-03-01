import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MercadoComponent } from '../mercado/mercado.component';


@Component({
  selector: 'app-carrinhocompra',
  standalone: true,
  imports: [RouterLink,MercadoComponent],
  templateUrl: './carrinhocompra.component.html',
  styleUrl: './carrinhocompra.component.css',
})
export class CarrinhocompraComponent {

  lancheP!: string;
  lancheM!: string;
  lancheG!: string;
  Qtdlache!:number;
  Qtdlache1!:number;
  Qtdlache2!:number;
  valorCarneExtra!: string;
  total!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Recuperar os parâmetros da rota
    this.route.queryParams.subscribe(params => {
      this.lancheP = params['lancheP'];
      this.lancheM = params['lancheM'];
      this.lancheG = params['lancheG'];
      this.Qtdlache = params['Qtdlache'];
      this.Qtdlache1 = params['Qtdlache1'];
      this.Qtdlache2 = params['Qtdlache2'];
      this.valorCarneExtra = params['valorCarneExtra'];
      this.total = params['total'];
    });
  }

  //outro typecript
}






