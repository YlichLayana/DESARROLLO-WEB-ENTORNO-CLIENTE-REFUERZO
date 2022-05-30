<?php
// Array con nombres
$a[1] = "Arantzazu";
$a[2] = "Mónica";
$a[3] = "Gema";
$a[4] = "María";
$a[5] = "Esla";
$a[6] = "Ismael";
$a[7] = "Jesús";
$a[8] = "Adrián";
$a[9] = "José";
$a[10] = "Luisa";
$a[11] = "Manuel";
$a[12] = "Pablo";
$a[13] = "Diego";
$a[14] = "Ricardo";
$a[15] = "Alonso";
$a[16] = "Carlos";
$a[17] = "Jacinto";
$a[18] = "Ana";


// Parámetro para buscar
$q = $_REQUEST["q"];

$resultado = "";

// Comprobación
if ($q !== "") {
    $q = strtolower($q);
    $tam=strlen($q);
    foreach($a as $nombre) {
        if (stristr($q, substr($nombre, 0, $tam))) {
            if ($resultado === "") {
                $resultado = "<p>".$nombre."<p>";
            } else {
                $resultado .= "<p>".$nombre."<p>";
            }
        }
    }
}

// Mensaje si no hay resultados
echo $resultado === "" ? "no existen coincidencias " : $resultado;
?>