import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})

export class SaltoabaEspecificaService {
  [x: string]: any;

  constructor() { }

  scrollToElement(selector: string): void {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}