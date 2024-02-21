
import {Routes } from '@angular/router';

import { GaleriaComponent } from './galeria/galeria.component';
import { PageinitialComponent } from './pageinitial/pageinitial.component';
import { MercadoComponent } from './mercado/mercado.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PromocaoComponent } from './promocao/promocao.component';






export const routes: Routes = [
    
     {path:'home',title:'',component:PageinitialComponent},
     {path:'cardapio',title:'cardapio',component:CardapioComponent},

     {path:'galeria',title:'galeria',component:GaleriaComponent},

     {path:'mercado',title:'mercado',component:MercadoComponent},
     
    {path:'promocao', title:'promocao',component:PromocaoComponent},
     
     {path: '', redirectTo:'/home',pathMatch:'full'},
     
   ];
  
   
    

