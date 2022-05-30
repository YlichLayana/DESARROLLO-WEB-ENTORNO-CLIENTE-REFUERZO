<?php
 $entrada = fopen('php://input','r');
 $datos = fgets($entrada);
 $datos = json_decode($datos,true);
 switch ($datos['alumno']){
	case 'Isaac Newton':
		switch ($datos['materia']){
			case 'Matemáticas':
				echo '{"calificacion":10.5}';
					break;
			case 'Lenguaje':
				echo '{"calificacion":9.5}';
					break;
				}
			break;
	case 'Marie Courie':
		switch ($datos['materia']){
			case 'Matemáticas':
				echo '{"calificacion":10.5}';
				break;
			case 'Lenguaje':
				echo '{"calificacion":7.5}';
				break;
			}
		break;
 }
?>
