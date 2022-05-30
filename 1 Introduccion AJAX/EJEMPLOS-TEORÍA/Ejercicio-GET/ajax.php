<?php
	$alumno = $_REQUEST['alumno'];
	$materia = $_REQUEST['materia'];
	switch ($alumno){
		case 'Albert Einstein':
			switch ($materia){
				case 'Matemàticas':
					echo '7.5';
					break;
				case 'Lenguaje':
					echo '9.5';
					break;
			}
			break;
		case 'Marie Courie':
			switch ($materia){
				case 'Matemàticas':
					echo '8.5';
					break;
				case 'Lenguaje':
					echo '7.5';
					break;
			}
			break;
	}
?>
