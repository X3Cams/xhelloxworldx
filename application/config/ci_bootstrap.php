<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| CI Bootstrap 3 Configuration
| -------------------------------------------------------------------------
| This file lets you define default values to be passed into views
| when calling MY_Controller's render() function.
|
| See example and detailed explanation from:
| 	/application/config/ci_bootstrap_example.php
*/
header('Access-Control-Allow-Origin: *');
header('Origin: '.$_SERVER['HTTP_HOST']);
$config['ci_bootstrap'] = array(
	// Site name
	'site_name' => '<sup>Th</sup>INC',

	// Default page title prefix
	'page_title_prefix' => '<sup>Th</sup>INC - ',

	// Default page title
	'page_title' => 'Lobby',

	// Angel's quirky bullshit
	'c' => array(
		'menu' => array('children' => 'pole_north', 'url' => 'home/pole_north','name' => 'Acme: Arctic Division'),
		'page_title' => '',
		'site_name' => '<sup>Th</sup>INC Tanq',
		'carousel' => FALSE,
		'inner_view' => '../pole_north',
		'current_uri' => NULL,
		'ctrler' => 'pole_north',
		'xml' => array(),
		'content' => 'Operation Pole North. Covert operation to bring all poles north. No pole left behind.',
		'toolbar' => array(
			'Home' => array('name' => 'Home Ⓘ','url' => '/'),
			'Admin Panel' => array('name' => 'Admin Panel', 'url' => '/admin'),
			'Swagger' => array('name' => 'The Dirty ⓥ', 'url' => '/api')
		)
	),

	'xcams' => array(),

	// Default meta data
	// 'meta_data'	=> array(
	// 	'author'		=> 'Angel Aces',
	// 	//'description'	=> 'The Internctive Network Console (ThINC working title) - Is an all purpose backend. It\'s currently bare and featureless but that\'s about to change.',
	// 	'description'	=> 'X3Cams - Centralized Cam Site for your Favorite Adult live action and Tube Videos',
	// 	'keywords'		=> ''
	// ),

	'meta_data'	=> array(
		'author'		=> 'Austin Bennett',
		'description'	=> 'The Internctive Network Console (ThINC working title) - Is an all purpose backend. It\'s currently bare and featureless but that\'s about to change.',
		'keywords'		=> '',
		'viewport'		=> 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no shrink-to-fit=no'
	),

	// Default scripts to embed at page head or end
	'scripts' => array(
		'head'	=> array(
		),
		'foot'	=> array(
			//'http://127.0.0.1:8097',
			//'http://127.0.0.1:3000',
			'https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous',
			'script-compiled.js',
			//'assets/dist/js/theme.min.js',
			//'assets/dist/js/script.js',
			// 'https://fb.me/react-15.0.0.js',
			// 'https://fb.me/react-dom-15.0.0.js',
			// 'node_modules/react-stonecutter/src/index.js',
			//'assets/dist/js/stonecutter.js',
		//	'assets/dist/js/app.min.js',
			'assets/dist/js/custom.js',
			'assets/dist/js/blur/spoiler.js'
			//'assets/dist/js/tree_module.js'
		)
	),

	// Default stylesheets to embed at page head
	'stylesheets' => array(
		'screen' => array(
			'assets/dist/css/frontend.css'
			//'assets/dist/css/rc-slider.css',
			//'assets/dist/css/grid.css',
			//'assets/dist/css/styles.css'


		)
	),

// Fail-safe scripts for Internet Exploader
	'fail_safe' => '<!--[if lt IE 9]>
				<script>
				(function(){
				  var ef = function(){};
				  window.console = window.console || {log:ef,warn:ef,error:ef,dir:ef};
				}());
				</script>
				<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
				<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>
				<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js"></script>
				<![endif]-->',

	// Default CSS class for <body> tag
	'body_class' => 'primarylayout',

	// Multilingual settings
	'languages' => array(
		'default'		=> 'en',
		'autoload'		=> array('general'),
		'available'		=> array(
			'en' => array(
				'label'	=> 'English',
				'value'	=> 'english'
			),
			'zh' => array(
				'label'	=> '繁體中文',
				'value'	=> 'traditional-chinese'
			),
			'cn' => array(
				'label'	=> '简体中文',
				'value'	=> 'simplified-chinese'
			),
			'es' => array(
				'label'	=> 'Español',
				'value' => 'spanish'
			),
			'rm'  => array(
				'label' => 'Romanian',
				'value' => 'romanian'
			),
		),
	),

	// Google Analytics User ID
	'ga_id' => '',

	// Menu items
	'menu' => array(
		'Home' => array('name'=> 'Home', 'url'=> '/', 'children' => array_combine(array('Sports', 'Census Analysis', 'Industrial Market', 'Fulltilt'), array('/home/cast', '/home/tree', '/home/customizer', '/home/styleguide'))),
		'X3Cams' => array('name'=> 'X3Cams', 'url'=> '#', 'children' => array_combine(array('X3Cams', 'Grid Test', 'Grid Test 2', 'Profile', 'Video Test', 'Standard View'), array('/X3cams', '/X3cams/grid', '/X3cams/grid_module', '/X3cams/video', '/X3cams/fulltilt', '/X3cams/chaturbate'))),
		'News' => array('name'=> 'News', 'url'=> '/News', 'children' => NULL),
		'Sports' => array('name'=> 'Sports', 'url'=> '/Sports', 'children' => NULL),
		'Sandbox' => array('name'=> 'Sandbox', 'url'=> '/Sandbox', 'children' => NULL)
	),
	'toolbar' => array(
		'Admin' => array('name' => 'Admin Panel', 'url' => '/', 'children'=>''),
		'Swagger API' => array('name' => 'Swagger API', 'url' => '/api', 'children' => ''),
		'Bootstrap Tools' => array('name' => 'Bootstrap/React Tools', 'url' => '',  'children' => array_combine(
			array('Bootstrap Live Customizer', 'Bootstrap-Sass', 'Less2Sass', 'Less-Scss-convertor'),
			array('http://bootstrap-live-customizer.com/', 'https://www.npmjs.com/package/bootstrap-sass', 'http://brianflove.com/2015/08/20/less-to-sass/', 'https://www.npmjs.com/package/less-scss-convertor')
			)
		)
	),

	// Login page
	'login_url' => '/admin',

	// Restricted pages
	'page_auth' => array(
	),

	// Email config
	'email' => array(
		'from_email'		=> '',
		'from_name'			=> '',
		'subject_prefix'	=> '',

		// Mailgun HTTP API
		'mailgun_api'		=> array(
			'domain'			=> '',
			'private_api_key'	=> ''
		),
	),

	// Debug tools
	'debug' => array(
		'view_data'	=> FALSE,
		'profiler'	=> FALSE
	),

	'headers' => array(
		'Access-Control-Allow-Origin: "http://angelxaces.twilightparadox.com"',
		'Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS',
		'Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, WWW-Authenticate, Server-Authorization, Access-Control-Allow-Origin',
		'Access-Control-Expose-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, WWW-Authenticate, Server-Authorization, Access-Control-Allow-Origin',
		'Header always set Access-Control-Allow-Origin "*"',
		'Header always set Access-Control-Max-Age "1000"',
		'Header always set Access-Control-Allow-Headers "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding"',
		'Header always set Access-Control-Allow-Methods "POST, GET, OPTIONS, DELETE, PUT"'
	),
);

/*
| -------------------------------------------------------------------------
| Override values from /application/config/config.php
| -------------------------------------------------------------------------
*/
$config['sess_cookie_name'] = 'cookie';
