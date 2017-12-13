$(document).ready(function() {
  setTimeout(function() {
    $(".food").fadeOut(1500);
  },3000);
});
$(document).ready(function() {
  setTimeout(function() {
    $(".contenidoInicial").fadeIn(1500);
  },3000);

  $('.restaurante').hide();
  $('.restaurante:first').show();

  $('#chile').click(select);
  $('#japon').click(select1);
  $('#china').click(select2);

  function select(){
    $('#chilena').show();
    $('#japonesa').hide();
    $('#chinesse').hide();
  }

  function select1(){
    $('#japonesa').show();
    $('#chilena').hide();
    $('#chinesse').hide();
  }

  function select2(){
    $('#chinesse').show();
    $('#japonesa').hide();
    $('#chilena').hide();
  }
  $('#modal1').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
});
$('.img1').mouseover(function(){
  	$('.img-overplay').show().text('Dorayaki');
  }).mouseout(function(){
  	/*$('.img-overplay').hide();*/
  })
