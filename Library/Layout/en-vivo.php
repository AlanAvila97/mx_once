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
    <!-- Video JS -->  
    <link rel="stylesheet" href="./assets/css/videojs/video-js.min.css" media="none" onload="if(media!='all')media='all'"/>
    <noscript><link rel="stylesheet" href="./assets/css/videojs/video-js.min.css"></noscript>
    <link rel="stylesheet" href="./assets/css/videojs/videojs-http-source-selector.css" media="none" onload="if(media!='all')media='all'"/>
    <noscript><link rel="stylesheet" href="./assets/css/videojs/videojs-http-source-selector.css"></noscript>
    <!--  -->
    <link rel="stylesheet" href="./assets/css/en-vivo.css" media="none" onload="if(media!='all')media='all'"/>
    <noscript><link rel="stylesheet" href="./assets/css/en-vivo.css"></noscript>
<body class="en-vivo">
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
    <!-- Moment JS -->
    <script defer src="./assets/js/momentjs/moment.js"></script>
	<script defer src="./assets/js/momentjs/moment-with-locales.js"></script>
	<script defer src="./assets/js/momentjs/moment-timezone-with-data.js"></script>
    <!-- Video Js -->
    <script defer src="./assets/js/videojs/video.min.js"></script>
    <script defer src="./assets/js/videojs/Youtube.min.js"></script>
    <script defer src='./assets/js/videojs/videojs-http-source-selector.js'></script>
    <script defer src='./assets/js/videojs/videojs-contrib-quality-levels.min.js'></script>
    <script defer src="./assets/js/videojs/videojs-landscape-fullscreen.min.js"></script>
    <script defer src="./assets/js/videojs/videojs-player-analytics.js"></script>
    <script defer src="./assets/js/videojs/videojs-vimeo.umd.js"></script>
    <script defer src="./assets/js/videojs/videojs.hotkeys.min.js"></script>
    <!--  -->
    <script defer src="./assets/js/en-vivo.js"></script>
</body>
