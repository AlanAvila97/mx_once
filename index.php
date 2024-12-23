<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST, FILES');
	/*header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");*/

	date_default_timezone_set('America/Mexico_City');

	require_once(dirname(__FILE__)."/Library/Settings.php");

	$json = file_get_contents('https://canaloncetv.s3.amazonaws.com/REST/data/mdb/paginas_modificables.json');
	$obj = json_decode($json);
	$statusUrl = false;
	$url = $_SERVER['REQUEST_URI'];
	$sectionUrl = explode("/", $url);

	foreach ($sectionUrl as $key => $value) {
		if($value == 'index.php' || $value == 'index' ){
			header("Location: https://canalonce.mx");
			die();
		}
	}
	if(isset($_GET['module'])){ 
		$module = $_GET['module'];
	}
	if(isset($_GET['module'])){ 
		$slug = $_GET['slug'];
	}


	if(isset($module)){
		
		// if($slug == "eloncees"){

		// 	header("Location: https://buzon.elonce.mx/");
		// 	die();
		// }

		if(file_exists($sitePath.$module.".php")){
			require_once($sitePath.$module.".php");
		}else{
			
			foreach($obj as $pgr){
				if($pgr->slug == $module){
					$statusUrl = true;
				}
			}
			if($statusUrl){
				require_once($sitePath."wp.php");
			}else{
				header( "HTTP/1.1 404 Not Found" );
				require_once($sitePath.$notFoundErrorPage);
			}
		}
	}else{
		require_once($sitePath."home.php");
	}
?>
