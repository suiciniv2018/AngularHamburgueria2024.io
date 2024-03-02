import {Routes } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { PageinitialComponent } from './pageinitial/pageinitial.component';
import { MercadoComponent } from './mercado/mercado.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PromocaoComponent } from './promocao/promocao.component';
import { CarrinhocompraComponent } from './carrinhocompra/carrinhocompra.component';


export const routes: Routes = [
    
     {path:'home',title:'',component:PageinitialComponent},

     {path:'cardapio',title:'cardapio',component:CardapioComponent},

     {path:'galeria',title:'galeria',component:GaleriaComponent},

     {path:'mercado',title:'mercado',component:MercadoComponent},
     
    {path:'promocao', title:'promocao',component:PromocaoComponent},
    
    {path:'carro', title:'carroCompra',component:CarrinhocompraComponent},
     
     {path: '', redirectTo:'/home',pathMatch:'full'},
     
   ];
  
   
    

