<?php

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$edad = $_POST["edad"];

header('Content-Type: application/json');

$datos = array(
'estado' => 'ok',
'nombre' => $nombre, 
'apellido' => $apellido, 
'edad' => $edad
);

echo json_encode($datos);




?>
