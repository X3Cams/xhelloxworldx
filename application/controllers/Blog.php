<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Home page
 */
class Blog extends MY_Controller {

	public function __construct()
	{
		parent::__construct();
		@session_start();
		$this->load->helper(array('xml', 'email', 'form', 'MY_Curl', 'array'));
		$this->load->library(array('xcurl', 'yaml', 'pagination'));

	public function index()
	{

		$this->render('react_module', 'with_breadcrumb');
	}

	public function grid()
	{
		//$this->mScripts['footer'] .= 'assets/dist/effects/stonecutter.js';
		$this->render('car_code', 'with_breadcrumb');
	}

	public function video()
	{
		$this->render('xmloutput', 'with_breadcrumb');
	}

	public function fulltilt()
	{
		//$this->mScripts[1] .= 'assets/dist/effects/stonecutter.js';
		$this->render('fulltilt','with_breadcrumb');
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
		$c = array(
			'menu' => array('children' => 'pole_north', 'url' => 'home/pole_north','name' => 'Acme: Arctic Division'),
			'toolbar' => array('children' => 'name', 'Cli'=> 'Command Line Interface' , 'url' => 'home/'),
			'site_name' => 'Acme: Arctic Division',
			'page_title' => 'NASCAR V3',
			'inner_view' => '../pole_north',
			'current_uri' => current_url(),
			'ctrler' => 'pole_north',
			'content' => 'Operation Pole North. Covert operation to bring all poles north. No pole left behind.',
			//'xml' => array()
			//'connections' => curl2xml('https://chaturbate.com/affiliates/in/?track=default&tour=x1Rd&campaign=KZ7tX&c=15&p=1', $hdrs)
			//'connections' => curl2xml('https://chaturbate.com/affiliates/api/onlinerooms/?format=yaml&wm=KZ7tX', $hdrs)
			//'connections' => curl2xml('http://chaturbate.com/feed/latest/?gender=f&wm=KZ7tX', $hdrs)
			//'xml' => new SimpleXMLElement('http://chaturbate.com/feed/latest/?gender=f&wm=KZ7tX', 0, TRUE)
			//'xml' => new SimpleXML_load_file('https://chaturbate.com/affiliates/api/onlinerooms/?format=xml&wm=KZ7tX') or die ("error: same xml bullshit")
		);
		$this->render('test_blank', 'with_breadcrumb');

	}
	public function chaturbate() {

  		$this->xcams = file_get_contents('https://chaturbate.com/affiliates/in/?track=default&tour=x1Rd&campaign=KZ7tX&c=15&p=1');
		$this->render('test_blank', 'with_breadcrumb');

	}
}
//
