<!DOCTYPE html>
<html lang="es-MX">
<head>
    <meta charset="UTF-8">
    <title>Tv En vivo || <?php echo $titleName; ?></title>
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
    <!-- swiper  -->
    <link rel="preload" href="./assets/css/swiper/swiper-bundle.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="./assets/css/swiper/swiper-bundle.min.css"></noscript>
    <!--  -->
    <link rel="stylesheet" href="./assets/css/mapa.css" media="none" onload="if(media!='all')media='all'"/>
    <noscript><link rel="stylesheet" href="./assets/css/mapa.css"></noscript>
<body class="tv-en-vivo body-overflow-hidden">
    <!-- Preloader -->
	<?php require_once("./Library/Layout/components/preloader.php");?>
    <!-- End Preloader -->
    <!-- Navbar -->
	<?php require_once("./Library/Layout/components/nabvar.php");?>
    <!-- End Navbar -->
    <main id="wrapper">
        <!-- View -->
        <?php require_once("./Library/Layout/views/en_vivo_view.php");?>
        <!-- End View -->
    </main>
    <!-- Footer  -->
	<?php require_once("./Library/Layout/components/footer.php");?>
    <!-- End Footer  -->     
    <!--  Footer Elements  -->
    <?php require_once("./Library/Layout/components/footer_elements.php");?>
    <!-- End Footer Elements-->
    <!-- swiper  -->
    <script defer src="./assets/js/swiper/swiper-bundle.min.js"></script>
    <!--  -->
    <script src='https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.5.0/dist/svg-pan-zoom.min.js'></script>    
    <script defer src="./assets/js/mapa_tv.js"></script>
    <script defer src="./assets/js/tv_en_vivo.js"></script>
</body>
