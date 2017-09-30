<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Home page
 */
class Sports extends MY_Controller {

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


		$this->render('blank_view', 'with_breadcrumb');
	}

	public function introduction()
	{
		$c = array(
			'page_title' => 'Not Another Responsive Website Demo',
			'carousel' => true,
			'site_name' => 'Why chickes are offended by black tar'
		);
		$this->render('grid_layout', 'with_breadcrumb');
	}

	public function cast()
	{
		$this->render('cathouse', 'with_breadcrumb');
	}

	public function view_debugger()
	{
		$this->load->view('layouts/with_breadcrumb');
	}

	public function datastream() {


		$hdrs = array('track' => 'default', 'tour' => 'x1Rd', 'campaign' => 'KZ7tX', 'c' => '15', 'p' => '1', 'gender' => 'f');
		$this->mC = array(
			'menu' => array('children' => 'pole_north', 'url' => 'home/pole_north','name' => 'Acme: Arctic Division'),
			'toolbar' => array('children' => 'name', 'Cli'=> 'Command Line Interface' , 'url' => 'home/'),
			'site_name' => 'Acme: Arctic Division',
			'page_title' => 'NASCAR V3',
			'inner_view' => '../pole_north',
			'current_uri' => current_url(),
			'ctrler' => 'pole_north',
			'content' => 'Operation Pole North. Covert operation to bring all poles north. No pole left behind.',
			//'connections' => curl2xml('https://chaturbate.com/affiliates/in/?track=default&tour=x1Rd&campaign=KZ7tX&c=15&p=1', $hdrs)
			//'connections' => curl2xml('https://chaturbate.com/affiliates/api/onlinerooms/?format=xml&wm=KZ7tX', $hdrs)
			//'xml' => new SimpleXMLElement('https://chaturbate.com/affiliates/api/onlinerooms/?format=xml&wm=KZ7tX', 0, TRUE)
			//'xml' => new SimpleXML_load_file('https://chaturbate.com/affiliates/api/onlinerooms/?format=xml&wm=KZ7tX') or die ("error: same xml bullshit")
			//'connections' => json_decode($ch, false)
			//'connections' => $xml
		);

		$this->render('pole_north', 'with_breadcrumb');
		//$this->load->view('pole_north', $c);
		//curl_close($ch);

	}
	public function datastream2() {
		//$ch = curl_init('https://chaturbate.com/affiliates/in/?track=default&tour=x1Rd&campaign=KZ7tX&c=15&p=0"');
		//$opn = fopen('/affiliates/in/?track=default&tour=x1Rd&campaign=KZ7tX&c=100&p=0', 'w');
		// $options = array(
		// 	CURLOPT_URL => 'https://axacams.chaturbate.com',
		// 	CURLOPT_HEADER => TRUE,
		// 	CURLOPT_HTTPHEADER =>
		// 	array('track: default', 'tour: x1Rd', 'campaign: KZ7tX', 'c: 15', 'p: 0', 'format: xml'),
		// );

		// $options = array(
		// 	CURLOPT_URL => 'https://chaturbate.com/affiliates/api/onlinerooms/?format=xml&wm=KZ7tX',
		// 	CURLOPT_HEADER => TRUE,
		// 	);
		// curl_setopt_array($ch, $options);
		//
		// $xml = curl_exec($ch);


		$c = array(
			'menu' => array('children' => 'pole_north', 'url' => 'home/pole_north','name' => 'Acme: Arctic Division'),
			'site_name' => 'Acme: Arctic Division',
			'page_title' => 'up up and away... Ill get you a towel',
			'inner_view' => '../pole_north',
			'current_uri' => current_url(),
			'ctrler' => 'pole_north',
			'content' => 'Operation Pole North. Covert operation to bring all poles north. No pole left behind.',
			'connections' => $this->render_json(curl2xml('https://chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=KZ7tX'), true)
		);
		$this->render('pole_north', 'with_breadcrumb');

	}
}
//
