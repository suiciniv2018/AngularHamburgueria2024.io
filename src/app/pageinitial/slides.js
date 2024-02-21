jQuery(function ($) {
    $("#carouselExampleIndicators").carousel();   
    $(".item1").on(function () {
        $("#carouselExampleIndicators").carousel(0);
    });
});


jQuery(function ($) {
    $("#carouselExampleIndicators").carousel();   
    $(".item2").on(function () {
        $("#carouselExampleIndicators").carousel(1);
    });
});
 

jQuery(function ($) {
    $("#carouselExampleIndicators").carousel();   
    $(".item3").on(function () {
        $("#carouselExampleIndicators").carousel(2);
    });
});



  $(".left").on(function () {
      $("#carouselExampleIndicators").carousel("prev");
  });
  $(".right").on(function () {
      $("#carouselExampleIndicators").carousel("next");
  });

  $("#carouselExampleIndicators").on('slid.bs.carousel', function () {
      alert ('Aproveite as promoçoes de final de semana');
      
      
      
  });

