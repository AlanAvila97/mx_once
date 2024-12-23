<!DOCTYPE html>
<html lang="es-MX">
<head>
    <meta charset="UTF-8">
    <title>Noticias || <?php echo $titleName; ?></title>
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
    <!-- End Elements Header -->
    <link rel="stylesheet" href="./assets/css/noticias.css" media="none" onload="if(media!='all')media='all'"/>
    <noscript><link rel="stylesheet" href="./assets/css/noticias.css"></noscript>
<body class="noticias body-overflow-hidden">
    <!-- Preloader -->
	<?php require_once("./Library/Layout/components/preloader.php");?>
    <!-- End Preloader -->
    <!-- Navbar -->
	<?php require_once("./Library/Layout/components/nabvar.php");?>
    <!-- End Navbar -->
    <main id="wrapper">
        <!-- View -->
	    <?php require_once("./Library/Layout/views/noticias_view.php");?>
    </main>
    <!-- End View -->
    <!-- Footer  -->
	<?php require_once("./Library/Layout/components/footer.php");?>
    <!-- End Footer  -->     
    <!--  Footer Elements  -->
    <?php require_once("./Library/Layout/components/footer_elements.php");?>
    <!-- End Footer Elements-->
</body>
