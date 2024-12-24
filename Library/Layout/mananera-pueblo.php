<!DOCTYPE html>
<html lang="es-MX">
<head>
    <meta charset="UTF-8">
    <title>Mañanera Pueblo || <?php echo $titleName; ?></title>
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
    <!--  -->
    <link rel="stylesheet" href="./assets/css/mananera-pueblo.css" media="none" onload="if(media!='all')media='all'"/>
    <noscript><link rel="stylesheet" href="./assets/css/mananera-pueblo.css"></noscript>
<body class="mananera">
    <!-- Preloader -->
	<?php require_once("./Library/Layout/components/preloader.php");?>
    <!-- End Preloader -->
    <!-- Navbar -->
	<?php require_once("./Library/Layout/components/nabvar.php");?>
    <!-- End Navbar -->
    <!-- Preloader Search -->
    <?php require_once("./Library/Layout/components/preloader_search.php");?>
    <!-- End Preloader Search -->
    <main id="wrapper">     
        <!-- View -->
        <?php require_once("./Library/Layout/views/mananera_pueblo_view.php");?>
        <!-- End View -->
    </main>
    <!-- Footer  -->
	<?php require_once("./Library/Layout/components/footer.php");?>
    <!-- End Footer  -->     
    <!--  Footer Elements  -->
    <?php require_once("./Library/Layout/components/footer_elements.php");?>
    <!-- End Footer Elements-->
    <!--  -->
    <script defer src="./assets/js/mananera-pueblo.js"></script>
</body>
