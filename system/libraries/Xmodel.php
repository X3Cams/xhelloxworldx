<?php
/**
 * CodeIgniter
 *
 * An open source application development framework for PHP
 *
 * This content is released under the MIT License (MIT)
 *
 * Copyright (c) 2014 - 2016, British Columbia Institute of Technology
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @package	CodeReactor
 * @author	EllisLab Dev Team / AngelXAces
 * @copyright	Copyright (c) 2008 - 2014, EllisLab, Inc. (https://ellislab.com/)
 * @copyright	Copyright (c) 2014 - 2016, British Columbia Institute of Technology (http://bcit.ca/)
 * @copyright	Copyright (c) 2017 AngelXAces
 * @license	http://opensource.org/licenses/MIT	MIT License
 * @link	https://codeigniter.com
 * @since	Version 1.3.1
 * @filesource
 */
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * HTML Table Generating Class
 *
 * Lets you create tables manually or from database result objects, or arrays.
 *
 * @package		CodeIgniter
 * @subpackage	Libraries
 * @category	HTML Tables
 * @author		EllisLab Dev Team
 * @link		https://codeigniter.com/user_guide/libraries/table.html
 */
class CI_Xmodel {

	// The listing of data that needs to be processed.
	public $$public_data = json_decode(file_get_contents('https://x3cams.chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=KZ7tX'));

	function _gender($public_shows = array()) {
		foreach

	}

	function bs_grid($data = array(), $specs = array(), $responsive = FALSE) {
		//$specs xs => 1-12, xs-offset =p> 1-12, sm => 1-12, etc
		//$data chaturbate model info

		if(isset($responsive) && $responsive == 1){
			$html = '<div class="container-fluid">';
		}else{
			$html = '<div class="container">';
		}

		foreach(ksort($data as $x => $y){
			if($y->is_hd === 1 ){ $y->hd = 'Yes'; }else{ $y->hd ='No'; }
			$html .= '<div class="col-xs-1 col-xs-offset-0 col-sm-1 col-sm-offset-1 col-md-1 col-md-offset-1 col-lg-1 col-lg-offset-1">';


			$html .= '<a  data-target="#image_modal" data-toggle="modal" data-img="'.$y->image_url_360x270.'" data-username="'.$y->username.'" data-displayname="'.$y->display_name.'" data-birthday="'.$y->birthday.'" data-age="'.$y->age.'" data-gender="'.$y->gender.'" data-subject="'.$y->room_subject.'" data-hd="'.$y->hd.'" data-duration="'.$y->seconds_online.'" data-lang="'.$y->spoken_languages.'" data-show="'.$y->current_show.'"><img id="'.$y->username.'" src="'.$y->image_url.'" alt="'.$x.'" title="'.$y->username.'-'.$y->display_name.'"></a>';
			$html .= '</div>';
		}
		if(!$responsive || $responsive != 1) {
			$html .= '</div>';
		}

		return $html;
	}

	function fb_grid() {
	// a grid layout using Facebook’s React user interface framework.
	}
}
