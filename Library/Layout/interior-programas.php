<?php
    date_default_timezone_set('America/Mexico_City');
    $json = file_get_contents('https://canaloncetv.s3.amazonaws.com/REST/data/mdb/channels.json');
    $obj = json_decode($json);
    //     
    $url = $_SERVER['REQUEST_URI'];
    $sectionUrl = explode("programas/", $url);
    $slugEpisode = explode("_", $sectionUrl[1]);
    $slug_pgm = $slugEpisode[0];
    $signal_pgm = (count($slugEpisode) > 1) ? $slugEpisode[1] : 'general';
    // 
    $programa = array();
    $imageEpisode = '';
    $category = '';
    // 
    foreach ($obj as $pgr) {
        if ($pgr->slugc == $slug_pgm) {
            $programa[] = $pgr;
            $imageEpisode = $pgr->imageN;
            $category = $pgr->category;
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
    <title><?php echo $programa[0]->name ?> || <?php echo $titleName; ?></title>
    <base href=".." target="_self">
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?php echo $programa[0]->description; ?>">
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
     <!-- Video JS -->
    <link rel="stylesheet" href="./assets/css/videojs/video-js.min.css" media="none" onload="if(media!='all')media='all'"/>
    <noscript><link rel="stylesheet" href="./assets/css/videojs/video-js.min.css"></noscript>
    <link rel="stylesheet" href="./assets/css/videojs/videojs-http-source-selector.css" media="none" onload="if(media!='all')media='all'"/>
    <noscript><link rel="stylesheet" href="./assets/css/videojs/videojs-http-source-selector.css"></noscript>
    <!--  -->
    <link rel="stylesheet" href="./assets/css/interior-programas.css" media="none" onload="if(media!='all')media='all'"/>
    <noscript><link rel="stylesheet" href="./assets/css/interior-programas.css"></noscript>
</head>
<body class="interior body-overflow-hidden bg-detalle">
    <!-- Preloader -->
	<?php require_once("./Library/Layout/components/preloader.php");?>
    <!-- End Preloader -->
    <!-- Navbar -->
	<?php require_once("./Library/Layout/components/nabvar.php");?>
    <!-- End Navbar -->
    <?php
        $bgTopShelf = "";
        $poster = "";
        if (!empty($programa[0]->imageN)) {
            $bgTopShelf = 'style="background-image:url(https://canalonce.mx/REST/data/normal/' . $programa[0]->imageN . ');"';
            $poster = 'https://canalonce.mx/REST/data/normal/' . $programa[0]->imageN;
        } else {
            $bgTopShelf = 'style="background-image:url(https://canalonce.mx/REST/data/miniaturas/' . $programa[0]->imageCH . ');"';
            $poster = 'https://canalonce.mx/REST/data/miniaturas/' . $programa[0]->imageCH;
        }
	?>
    <main id="wrapper" 
          data-signal='<?php echo strip_tags($signal_pgm); ?>' 
          data-slug="<?php echo strip_tags($slug_pgm); ?>" 
          data-categorie="<?php echo strip_tags($category); ?>">
        <?php require_once("./Library/Layout/views/programas/interior_programas_view.php"); ?>
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
    <script defer src="./assets/js/interior-programas.js"></script>
</body>
</html>