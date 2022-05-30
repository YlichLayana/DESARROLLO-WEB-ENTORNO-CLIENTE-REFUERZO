<?php
	header("Access-Control-Allow-Origin: *");
	if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
		exit;
	}
	$ext = strtolower(substr(strrchr($_FILES['imagen']['name'], "."), 1));
	if (array_search($ext,array('jpg','gif','png'))  === false){
		exit; //Evitar que se suban otros archivos.
	}
	$target_path = "./";
	$target_path = $target_path . $_FILES['imagen']['name'];	
	if (move_uploaded_file($_FILES['imagen']['tmp_name'], $target_path)) {
		echo utf8_encode($_FILES['imagen']['name']);
	} 
?>
