
"use strict"

$(document).ready(function () {      
  $("#carouselExampleIndicators").carousel();   
  $(".item1").click(function () {
      $("#carouselExampleIndicators").carousel(0);
  });
  $(".item2").click(function () {
      $("#carouselExampleIndicators").carousel(1);
  });
  $(".item3").click(function () {
      $("#carouselExampleIndicators").carousel(2);
  });

  $(".left").click(function () {
      $("#carouselExampleIndicators").carousel("prev");
  });
  $(".right").click(function () {
      $("#carouselExampleIndicators").carousel("next");
  });

  $("#carouselExampleIndicators").on('slid.bs.carousel', function () {
      alert ('Aproveite as promoçoes de final de semana');
      
      
      
  });
});
