<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Home page
 */


class X3cams extends MY_Controller {

	public function __construct()
	{
		parent::__construct();
		@session_start();
		$this->load->helper(array('xml', 'email', 'form', 'MY_Curl', 'MY_Misc', 'array'));
		$this->load->library(array('xcurl', 'yaml', 'pagination', 'xchunky', 'xgrid'));
		//https://edge16.stream.highwebmedia.com/live-edge/littlesonia-sd-d75c164244292641ee2f2c12db1cb01ac7bc3b96eee0863a75e71003fa139d0d_fast_aac/playlist.m3u8
	}

	public function x3cams(){

		//$jfile = file_get_contents($url);
		//$jdata = json_decode($jfile);
		//$model_rows = array_chunk($url, 12);

	}

	public function index()
	{
		$this->load->library('pagination');
		$config['base_url'] = base_url('/X3cams');
		$config['total_rows'] = count($this->mXcams)/20;
		$config['per_page'] = 20;
		$config['uri_segment'] = 3;
		$config['num_links'] = 4;
		
		$this->pagination->initialize($config);
		
		$this->mXcams = json_decode(file_get_contents('https://x3cams.chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=KZ7tX'));
		
		
		$this->output->enable_profiler(TRUE);
		$this->render('listing', 'with_breadcrumb');
		//$this->render('pagination_tester', 'with_breadcrumb');
	}


	public function modal_video()
	{
		$this->load->view('modals/model_info');
	}

	public function pagination()
	{
		//$this->mXcams = json_decode(file_get_contents($urls['cbatej']));


		// $loc = 'http://angelxaces.twilightparadox.com/X3cams/pagination';
		// $pg_trows = ceil(count($this->xcams/10));
		// $rows_perpg =10;

		$config['base_url'] = 'http://angelxaces.twilightparadox.com/X3cams/pagination';
		$config['total_rows'] = count($this->mXcams);
		$config['per_page'] = 20;
		$config['uri_segment'] = 3;
		$config['num_links'] = 4;

		$this->pagination->initialize($config);

		//$this->mPagination_bar = $this->pagination->render($pg_trows, $rows_perpg, $loc );


		$this->render('pagination_tester', 'with_breadcrumb');
	}


	public function xgrid()
	{


		$this->render('info_room_listing', 'cam_listing');
	}

	public function vars(){
        //$this->mXcams =  $this->format->factory(file_get_contents('https://chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=KZ7tX'))->to_php();
		$this->mXcams = json_decode(file_get_contents('https://x3cams.chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=KZ7tX'));
		$this->render('vars', 'with_breadcrumb');
	}

	public function x3cams_module() {

		$this->render('x3cams_module', 'with_breadcrumb');
	}

	public function demo() {
		$this->render('test_blank', 'with_breadcrumb');
	}

	public function grid()
	{
		$
		$this->render('grid', 'with_breadcrumb');
	}

	public function grid_module()
	{
		$this->render('react_module', 'with_breadcrumb');
	}

	public function info()
	{
		//screwed up layout but good grid concept - don't touch
		$this->render('info_room_listing', 'with_breadcrumb');
	}

	public function grid_from_node()
	{
		$this->render('x3cams_responsive', 'with_breadcrumb');
	}

	public function video()
	{
		$this->render('xmloutput', 'with_breadcrumb');
	}

	public function customizer()
	{
		$this->render('components', 'with_breadcrumb');
	}

	public function room()
	{
		$this->render('room', 'camroom');
	}

	public function fulltilt()
	{
		//$this->mScripts[1] .= 'assets/dist/effects/stonecutter.js';
		$this->render('fulltilt','with_breadcrumb');
	}

	public function introduction()
	{
		
		$this->render('grid_layout', 'with_breadcrumb');
	}

	public function cast()
	{
		$this->render('cathouse', 'with_breadcrumb');
	}

	public function view_debugger()
	{
		$this->load->view('_partials/navfooter');
	}

	public function datastream(){
		$this->render('test_blank', 'with_breadcrumb');

	}
	public function chaturbate() {
		$this->render('chaturbate', 'with_breadcrumb');

	}
}
