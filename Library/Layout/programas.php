
<?php
	$url = $_SERVER['REQUEST_URI'];
	$sectionUrl = explode("/", $url);
	$count = count($sectionUrl);	
    if($count == 5){
        require_once("./Library/Layout/interior-programas.php");
    }elseif($count == 6){
        require_once("./Library/Layout/detalle-programas.php");
    }else{
        header("Location: ./");
    }
?>

