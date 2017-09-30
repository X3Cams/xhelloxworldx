<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Home page
 */
class Data_tasks extends MY_Controller {

	public function __construct()
	{
		parent::__construct();
		@session_start();
		$this->load->helper(array('xml', 'email', 'form', 'MY_Curl', 'array'));
		$this->load->library(array('xcurl', 'yaml', 'pagination'));
			$this->mMenu = array(
				'Home' => array('name'=> 'Home', 'url'=> '/'),
				//'X3Cams' => array('name'=> 'X3Cams', 'url'=> '/x3cams'),
				'Sports' => array('name'=> 'Sports', 'url'=> '/sports'),
				'Sandbox' => array('name'=> 'Sandbox', 'url'=> '/sandbox'),
				'API Display' => array('name'=> 'API Display', 'url'=> '/api'),
				'Login' => array('name' => 'Admin', 'url' => '/admin')
			);

			$headers = array('track' => 'default', 'tour' => 'x1Rd', 'campaign' => 'KZ7tX', 'c' => '15', 'p' => '1', 'gender' => 'f');
			$urls = array(
				'mma' => 'http://api.sportradar.us/mma-t1/participants/f43a41cd-068f-4982-9d89-4af0556230ee/profile.xml?api_key=xqw8hbt533rry4ymknhdh8t4',
				'nascar' => 'http://api.sportradar.us/nascar-ot3/mc/2017/drivers/list.json?api_key=4xauxekdp37cn2zmcffq3b3q',
				'cbatej' => 'https://x3cams.chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=KZ7tX',
				'cbatey' => 'https://x3cams.chaturbate.com/affiliates/api/onlinerooms/?format=yaml&wm=KZ7tX',
				'foxsports' => 'https://newsapi.org/v1/articles?source=fox-sports&sortBy=top&apiKey=cdce6369b23041fca59c28c3513940e3'
			);
			//$this->mXcams = file_get_contents('https://x3cams.chaturbate.com/affiliates/api/onlinerooms/?format=yaml&wm=KZ7tX');
			//$this->mXcams = $this->render_json(curl2xml($urls['cbatej'], $headers));
			$this->mXcams = json_decode(file_get_contents($urls['nascar']));
	}


	public function index()
	{
		$mC = array(
			'menu' => array('children' => '', 'url' => '','name' => ''),
			'page_title' => '',
			'carousel' => FALSE,
			'data' => array(),
			'toolbar' => array('Cli' => array('name' => 'Command Line Interface', 'url' => '/home'), 'Tray' => array ('name' => 'Cam Tray', 'url' => '/admin'), 'Fav' => array('name' =>  'Favorites', 'url' => '/api'))
		);

		$this->render('home', 'with_breadcrumb');
	}
