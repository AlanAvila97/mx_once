<?php 
    date_default_timezone_set('America/Mexico_City');
    $json = file_get_contents('https://canaloncetv.s3.amazonaws.com/REST/data/mdb/channels.json');
    $obj = json_decode($json);
    // 
    $url = $_SERVER['REQUEST_URI'];
    $sectionUrl = explode("detalle-programa/", $url);    
    $slugEpisode = explode("_", $sectionUrl[1]);
    $slug_pgm = $slugEpisode[0];
    $signal_pgm = (count($slugEpisode) > 3) ? $slugEpisode[3] : 'general';
    //
    foreach ($obj as $pgr) {
        if ($pgr->slugc == $slugEpisode[0]) {
            $programa[] = $pgr;
            $imageEpisode = $pgr->imageCH;
            $descEpisode = $pgr->description;
        }
    }
    // 
    $id_episode = $slugEpisode[1];
    $jsonEpisode = file_get_contents('https://canaloncetv.s3.amazonaws.com/REST/data/mdb/episodes/' . $slug_pgm. '.json');
    $epi = json_decode($jsonEpisode);

    foreach ($epi as $ep) {
        if ($ep->id == $id_episode) {
            $titleEpisode = $ep->title;
        }
    }
    if($slug_pgm == 'activate'){
        header('Location: https://canalonce.mx/activate/');
        die();
    }
    if (empty($programa)) {
        header('Location: https://canalonce.mx/404');
        die();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title-episode"> <?php echo $titleEpisode; ?> | Canal Once </title>
    <base href="./../../" target="_self">
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="description" content="<?php echo $descEpisode; ?>">
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
    <!-- Videojs -->
    <link rel="stylesheet" href="./assets/css/videojs/video-js.min.css" media="none" onload="if(media!='all')media='all'"/>
    <noscript><link rel="stylesheet" href="./assets/css/videojs/video-js.min.css"></noscript>
    <link rel="stylesheet" href="./assets/css/videojs/videojs-http-source-selector.css" media="none" onload="if(media!='all')media='all'"/>
    <noscript><link rel="stylesheet" href="./assets/css/videojs/videojs-http-source-selector.css"></noscript>
    <!--  -->
    <link rel="stylesheet" href="./assets/css/detail-programs.css" media="none" onload="if(media!='all')media='all'"/>
    <noscript><link rel="stylesheet" href="./assets/css/detail-programs.css"></noscript>
</head>
<body class="interior body-overflow-hidden bg-detalle">
    <!-- Preloader -->
	<?php require_once("./Library/Layout/components/preloader.php");?>
    <!-- End Preloader -->
    <!-- Navbar -->
	<?php require_once("./Library/Layout/components/nabvar.php");?>
    <!-- End Navbar -->
    <main id="wrapper"                     
          data-categorie="">
        <?php require_once("./Library/Layout/views/programas/detalle_programas_view.php"); ?>
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
    <script defer src="./assets/js/detalles-programas.js"></script>
</body>
</html>