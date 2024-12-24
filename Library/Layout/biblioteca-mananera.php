<?php 
    date_default_timezone_set('America/Mexico_City');
    $json = file_get_contents('https://oncenoticias.digital/wp-json/miapi/v1/posts/?categoria=40&etiqueta=99');
    $obj = json_decode($json);
    // 
    $url = $_SERVER['REQUEST_URI'];
    $sectionUrl = explode("biblioteca-mananera/", $url);   
    // $id_note = $sectionUrl[1];
    $id_note = 396044;
    //
    foreach ($obj as $pgr) {
        if ($pgr->ID == $id_note) {
            $programa[] = $pgr;
            $description = $pgr->excerpt;
            $titleName = $pgr->title;
            $poster = $pgr->img;
        }
    }
?>
<!DOCTYPE html>
<html lang="es-MX">
<head>
    <meta charset="UTF-8">
    <title>Biblioteca Mañanera Pueblo || <?php echo $titleName; ?></title>
    <base href=".." target="_self">
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?php echo $description; ?>">
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
    <link rel="stylesheet" href="./assets/css/biblioteca_mananera.css" media="none" onload="if(media!='all')media='all'"/>
    <noscript><link rel="stylesheet" href="./assets/css/biblioteca_mananera.css"></noscript>
<body class="biblioteca_mananera">
    <!-- Preloader -->
	<?php require_once("./Library/Layout/components/preloader.php");?>
    <!-- End Preloader -->
    <!-- Navbar -->
	<?php require_once("./Library/Layout/components/nabvar.php");?>
    <!-- End Navbar -->
    <main id="wrapper">     
        <!-- View -->
        <?php require_once("./Library/Layout/views/biblioteca_mananera_view.php");?>
        <!-- End View -->
    </main>
    <!-- Footer  -->
	<?php require_once("./Library/Layout/components/footer.php");?>
    <!-- End Footer  -->     
    <!--  Footer Elements  -->
    <?php require_once("./Library/Layout/components/footer_elements.php");?>
    <!-- End Footer Elements-->
    <!--  -->
    <script defer src="./assets/js/biblioteca_mananera.js"></script>
</body>
