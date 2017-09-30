<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Home page
 */
class Home extends MY_Controller {

	public function __construct()
	{
		parent::__construct();
		@session_start();
		$this->load->helper(array('xml', 'email', 'form', 'MY_Curl', 'array'));
		$this->load->library(array('xcurl', 'yaml', 'pagination'));

	}


	public function index()
	{
		$mC = array(
			'menu' => array('children' => 'pole_north', 'url' => 'home/pole_north','name' => 'Acme: Arctic Division'),
			'page_title' => '',
			'site_name' => '<sup>Th</sup>INC Tanq',
			'carousel' => TRUE,
			'inner_view' => '../pole_north',
			'current_uri' => NULL,
			'ctrler' => 'pole_north',
			'xml' => array(),
			'content' => 'Operation Pole North. Covert operation to bring all poles north. No pole left behind.',
			'toolbar' => array('Cli' => array('name' => 'Command Line Interface', 'url' => '/home'), 'Tray' => array ('name' => 'Cam Tray', 'url' => '/admin'), 'Fav' => array('name' =>  'Favorites', 'url' => '/api'))
		);

		$this->render('home', 'with_breadcrumb');
	}
	public function article()
	{
		$this->render('article', 'article_template');
	}
	public function vars() {
		$this->render('vars', 'with_breadcrumb');
	}

	public function tree()
	{
		$this->render('tree', 'with_breadcrumb');
	}

	public function styleguide()
	{
		$mC = array(
			'menu' => array('children' => 'pole_north', 'url' => 'home/pole_north','name' => 'Acme: Arctic Division'),
			'page_title' => '',
			'site_name' => '<sup>Th</sup>INC Tanq',
			'carousel' => FALSE,
			'inner_view' => '../pole_north',
			'current_uri' => NULL,
			'ctrler' => 'pole_north',
			'xml' => array(),
			'content' => 'Operation Pole North. Covert operation to bring all poles north. No pole left behind.',
			'toolbar' => array('Cli' => array('name' => 'Command Line Interface', 'url' => '/home'), 'Tray' => array ('name' => 'Cam Tray', 'url' => '/admin'), 'Fav' => array('name' =>  'Favorites', 'url' => '/api'))
		);

		$this->render('components', 'with_breadcrumb');
	}

	public function introduction()
	{
		$mC = array(
			'menu' => array('children' => 'pole_north', 'url' => 'home/pole_north','name' => 'Acme: Arctic Division'),
			'page_title' => '',
			'site_name' => '<sup>Th</sup>INC Tanq',
			'carousel' => FALSE,
			'inner_view' => '../pole_north',
			'current_uri' => NULL,
			'ctrler' => 'pole_north',
			'xml' => array(),
			'content' => 'Operation Pole North. Covert operation to bring all poles north. No pole left behind.',
			'toolbar' => array('Cli' => array('name' => 'Command Line Interface', 'url' => '/home'), 'Tray' => array ('name' => 'Cam Tray', 'url' => '/admin'), 'Fav' => array('name' =>  'Favorites', 'url' => '/api'))
		);
		$this->render('grid_layout', 'with_breadcrumb');
	}

	public function cast()
	{
		$mC = array(
			'menu' => array('children' => 'pole_north', 'url' => 'home/pole_north','name' => 'Acme: Arctic Division'),
			'page_title' => '',
			'site_name' => '<sup>Th</sup>INC Tanq',
			'carousel' => FALSE,
			'inner_view' => '../pole_north',
			'current_uri' => NULL,
			'ctrler' => 'pole_north',
			'xml' => array(),
			'content' => 'Operation Pole North. Covert operation to bring all poles north. No pole left behind.',
			'toolbar' => array('Cli' => array('name' => 'Command Line Interface', 'url' => '/home'), 'Tray' => array ('name' => 'Cam Tray', 'url' => '/admin'), 'Fav' => array('name' =>  'Favorites', 'url' => '/api'))
		);
		$this->render('cathouse', 'with_breadcrumb');
	}

	public function view_debugger()
	{
		$this->site_name = 'debugger';
		$this->render('_partials/navfooter');
	}

	public function datastream() {
		$this->render('pole_north', 'with_breadcrumb');
	}
	public function datastream2() {
		$mC = array(
			'menu' => array('children' => 'pole_north', 'url' => 'home/pole_north','name' => 'Acme: Arctic Division'),
			'page_title' => '',
			'site_name' => '<sup>Th</sup>INC Tanq',
			'carousel' => TRUE,
			'inner_view' => '../pole_north',
			'current_uri' => NULL,
			'ctrler' => 'pole_north',
			'xml' => array(),
			'content' => 'Operation Pole North. Covert operation to bring all poles north. No pole left behind.',
			'toolbar' => array('Cli' => array('name' => 'Command Line Interface', 'url' => '/home'), 'Tray' => array ('name' => 'Cam Tray', 'url' => '/admin'), 'Fav' => array('name' =>  'Favorites', 'url' => '/api'))
		);
		$this->render('', 'with_breadcrumb');

	}
	public function mike() {

		$this->render('mike', 'with_breadcrumb');
	}
}
//
