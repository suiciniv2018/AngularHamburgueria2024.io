import { Injectable } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class SlidesMovService {


function() {
      $(".item2").on('click', function() {
        $("#carouselExampleIndicators").carousel(1);
      });

      $(".item3").on('click', function() {
        $("#carouselExampleIndicators").carousel(2);
      });

      $(".left").on('click', function() {
        $("#carouselExampleIndicators").carousel("prev");
      });

      $(".right").on('click', function() {
        $("#carouselExampleIndicators").carousel("next");
      });

      $("#carouselExampleIndicators").on('slid.bs.carousel', function() {
        alert('Aproveite as promoções de final de semana');
      });
}
}
