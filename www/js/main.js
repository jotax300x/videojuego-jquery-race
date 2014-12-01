//Variables
$body = $('body');
$coche = $('#coche');
$calzada = $('#calzada');
$calzada.width();
$coche.position();

$body.keydown(function(e) {
	var iLimDer = $calzada.position().left + $calzada.width()
	console.log(iLimDer + ' ' + $coche.position().left)
	switch(e.which) {
		case 39://Derecha
			if ($coche.position().left < iLimDer) {
				$coche.css('left', '+=10px');
			} else {
				$coche.css();
			} ;			
		break;
		case 37://Izquierda
			$coche.css('left', '-=10px');		
		break;
	}
});