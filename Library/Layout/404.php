<?php
	header( "HTTP/1.1 404 Not Found" );
?>
<!doctype html>
<html lang="es-MX">
<head>
	<title><?php echo $titleName; ?> | No se encontró la página</title>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<?php require_once("./Library/Layout/components/header_elements.php");?>
</head>
<body class="home">
	<?php require_once("./Library/Layout/components/nabvar.php");?>
	<div align="center" style="padding:3rem;">
		<img src="images/404.svg" width="40%" height="auto">
	</div>

</body>
</html>