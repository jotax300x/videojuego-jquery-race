//Variables
$body = $('body');
$coche = $('#coche');
$calzada = $('#calzada');
$calzada.width();
$coche.position();
$derecha = $('#derecha');
$izquierda = $('#izquierda');
var iLimDer = $calzada.position().left + $calzada.width() - $coche.width();

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