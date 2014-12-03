//Variables
$body = $('body');
$coche = $('#coche');
$calzada = $('#calzada');
$calzada.width();
$calzada.height();
$coche.position();
$derecha = $('#derecha');
$izquierda = $('#izquierda');
var bJugando = true;
var iLimDer = $calzada.position().left + $calzada.width() - $coche.width();
var altoCalzada = $calzada.height();
var $contrario = $('<div id="trafico"></div>');
var $boton = $('<button id="boton">Reiniciar</button>');


function comprobarColision() {
	$trafico = $('#trafico');	
	var posTraficoTop = $trafico.position().top;
	var posTraficoLeft = $trafico.position().left;
	var limitInferiorTrafico = $trafico.position().top + $trafico.height();
	var limittraficoD =  $trafico.position().left + $trafico.width();
	var limitInferiorCoche = $coche.position().top + $coche.height();	
	var posCocheTop = $coche.position().top;
	var posCocheLeft = $coche.position().left;
	var limitCocheD = $coche.position().left + $coche.width();	
	if (limitInferiorTrafico > posCocheTop && posTraficoTop < limitInferiorCoche 
		&& posTraficoLeft < limitCocheD && limittraficoD > posCocheLeft) {
		//console.log('Estan a la misma altura......................');
		$trafico.stop();
		if(bJugando == true) {
			$calzada.append($boton);
			bJugando = false;
		}
	};
	

}
$calzada.append($contrario);
$trafico = $('#trafico');
$trafico.animate({top: altoCalzada}, 10000);
setInterval('comprobarColision()', 100);

$izquierda.hover(function() {
	if ($coche.position().left > 0) {
		$coche.css('left', '-=10px');
	}
});

$derecha.hover(function() {
	if ($coche.position().left < iLimDer) {
		$coche.css('left', '+=10px');
	}
});

$body.keydown(function(e) {
	switch(e.which) {
		case 39://Derecha
			if ($coche.position().left < iLimDer) {
				$coche.css('left', '+=10px');
			} else {
				$coche.css();
			} ;			
		break;
		case 37://Izquierda
			if ($coche.position().left > 0) {
				$coche.css('left', '-=10px');
			}
					
		break;
	}
});