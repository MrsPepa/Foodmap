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
  $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
});

/*  efectos mouseover  */
$('.img1').mouseover(function(){
	$('#overplay1').show();
}).mouseout(function(){
	$('#overplay1').hide();
})
$('.img2').mouseover(function(){
	$('#overplay2').show();
}).mouseout(function(){
	$('#overplay2').hide();
})
$('.img3').mouseover(function(){
	$('#overplay3').show();
}).mouseout(function(){
	$('#overplay3').hide();
})
$('.img4').mouseover(function(){
	$('#overplay4').show();
}).mouseout(function(){
	$('#overplay4').hide();
})
$('.img5').mouseover(function(){
	$('#overplay5').show();
}).mouseout(function(){
	$('#overplay5').hide();
})
$('.img6').mouseover(function(){
	$('#overplay6').show();
}).mouseout(function(){
	$('#overplay6').hide();
})
$('.img7').mouseover(function(){
	$('#overplay7').show();
}).mouseout(function(){
	$('#overplay7').hide();
})
$('.img8').mouseover(function(){
	$('#overplay8').show();
}).mouseout(function(){
	$('#overplay8').hide();
})
$('.img9').mouseover(function(){
	$('#overplay9').show();
}).mouseout(function(){
	$('#overplay9').hide();
})
$('.img10').mouseover(function(){
	$('#overplay10').show();
}).mouseout(function(){
	$('#overplay10').hide();
})
$('.img11').mouseover(function(){
	$('#overplay11').show();
}).mouseout(function(){
	$('#overplay11').hide();
})
$('.img12').mouseover(function(){
	$('#overplay12').show();
}).mouseout(function(){
	$('#overplay12').hide();
})
$('.img13').mouseover(function(){
	$('#overplay13').show();
}).mouseout(function(){
	$('#overplay13').hide();
})
$('.img14').mouseover(function(){
	$('#overplay14').show();
}).mouseout(function(){
	$('#overplay14').hide();
})
$('.img15').mouseover(function(){
	$('#overplay15').show();
}).mouseout(function(){
	$('#overplay15').hide();
})