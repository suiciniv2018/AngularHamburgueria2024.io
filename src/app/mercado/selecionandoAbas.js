function clicar(){

$('a.btn1').on('click', function(e) {
e.preventDefault();
var id = $(this).attr('href'),
targetOffset = $(id).offset().top;


$('html, body').animate({ 
scrollTop: targetOffset - 100 //altura que para antes do topo da tela
}, 200,'swing');
});

console.log('o erro é :',e)

}
