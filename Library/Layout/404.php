<?php
	header( "HTTP/1.1 404 Not Found" );
?>
<!doctype html>
<html lang="es-MX">
<head>	
	<meta charset="UTF-8">
    <title><?php echo $titleName; ?> | No se encontró la página</title>
	<base href="." target="_self">
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta property="og:url" content="">
    <meta property="og:site_name" content="">
    <meta property="article:publisher" content="">
    <meta property="og:image" content="">
    <meta name="twitter:site" content="">
    <!-- Elements Header -->
	<?php require_once("./Library/Layout/components/header_elements.php");?>
    <style>
        .container-404{
            padding: 1rem 3rem 0rem; 
        }
    </style>
</head>
<body class="home body-overflow-hidden">
	<!-- Preloader -->
	<?php require_once("./Library/Layout/components/preloader.php");?>
    <!-- End Preloader -->
    <!-- Navbar -->
	<?php require_once("./Library/Layout/components/nabvar.php");?>
    <!-- End Navbar -->
    <main id="wrapper">
        <article align="center" class="container-404 pt-md-70">
            <img src="./assets/images/404.svg" width="40%" height="auto">
        </article>
    </main>

    <!-- Footer  -->
	<?php require_once("./Library/Layout/components/footer.php");?>
    <!-- End Footer  -->     
    <!--  Footer Elements  -->
    <?php require_once("./Library/Layout/components/footer_elements.php");?>
    <!-- End Footer Elements-->
</body>
</html>