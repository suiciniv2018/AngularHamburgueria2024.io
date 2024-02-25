

function clicar(){

   
    $('a.btn2').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
    
    
    $('html, body').animate({ 
    scrollTop: targetOffset - 100 //altura que para antes do topo da tela
    }, 500,'swing');
    });
    
    console.log('o erro é :',e)
    
    }
    