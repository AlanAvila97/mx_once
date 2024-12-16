<?php
    //////////////////////////////////////////
	$titleName = "Mx+"; /// Title of the project
	$debugScripts = true; /// Enables the debuging mode
	$siteDomain = "canalonce.mx"; /// Base domain for the project
	$protocol = stripos($_SERVER['SERVER_PROTOCOL'],'https') === 0 ? 'https://' : 'http://'; /// access protocol
	$sitePath = dirname(__FILE__)."/Layout/"; /// Path for the site layouts
	$cmsPath = dirname(__FILE__)."/Matrix/"; /// Path for the CMS
	$notFoundErrorPage = "404.php"; /// Not found layout
	//////////////////////////////////////////

	/// Enables errors in PHP
	if($debugScripts){
		ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		error_reporting(E_ALL);
	}

?>
