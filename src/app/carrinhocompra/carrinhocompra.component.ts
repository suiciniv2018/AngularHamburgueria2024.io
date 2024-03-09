import { Component, OnInit } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { NgFor,NgIf } from '@angular/common';
import { MercadoComponent } from '../mercado/mercado.component';


@Component({
  selector: 'app-carrinhocompra',
  standalone: true,
  imports: [RouterLink,NgFor,NgIf, MercadoComponent],
  templateUrl: './carrinhocompra.component.html',
  styleUrl: './carrinhocompra.component.css',
  
  
})
export class CarrinhocompraComponent  {


}

 