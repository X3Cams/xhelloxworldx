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
 * HTML formatted output class
 *
 * Lets you create tables manually or from database result objects, or arrays.
 *
 * @package		CodeIgniter
 * @subpackage	Libraries
 * @category	HTML Tables
 * @author		EllisLab Dev Team
 * @link		https://codeigniter.com/user_guide/libraries/table.html
 */
class CI_Xchunky
{
	/**
	 * CI_Xgrid_walker constructor.
	 */
//	public function __construct($url)
//	{
//		// The listing of data that needs to be processed.
//		$chaturbate = 'https://x3cams.chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=KZ7tX';
//		$jfile = file_get_contents($chaturbate);
//		$phpdata = json_decode($jfile);
//		$sex_order = asort($phpdata,'gender');
//		$qbb = array_chunk($phpdata, 8, false);
//	}
	/**
	 * @param $var
	 *
	 * @return string
	 */
	function _temp($var=NULL)
	{
		if (!empty($var)) {
			$x = $var;
		} else {
			$x = 'https://chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=KZ7tX';
		}
		return $x;
	}
	
	/**
	 * @description takes url for an api, collects and decodes the json output creating an array which is then chunked into groups.
	 *
	 * @param $url
	 *
	 * @return array
	 */
	function _chunks()
	{
		// The listing of data that needs to be processed.
		$chaturbate = $this->_temp();
		//$gender = 'f';
		$jfile = file_get_contents($chaturbate);
		$php_data = json_decode($jfile);
		$genders = array_column($php_data, $php_data->gender);
		
		$online = sort($php_data, $genders);
		$qbb12 = array_chunk($online, 12);
		//Twelve Quite Bitter Beings will bring you the array
		return $qbb12;
	}
	
	function walk($val)
	{
		//$url = urlencode($val->chat_room_url_revshare);
		//$video = str_replace('bgcolor="white"', 'bgcolor="transparent"', $url);
		//$video = $val->username;
		$video = $val->username;
		$item = '<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"> <a data-target="#image-modal" data-toggle="modal" data-img="' . $val->image_url_360x270 . '" data-username="' . $val->username . '" data-displayname="' . $val->display_name . '" data-birthday="' . $val->birthday . '" data-age="' . $val->age . '" data-gender="' . $val->gender . '" data-subject="' . $val->room_subject . '"';
		$item .= ' data-hd="no" data-duration="' . $val->seconds_online . '" data-lang="' . $val->spoken_languages . '" data-show="' . $val->current_show . '" data-video="' . $video . '">';
		$item .= '<img src="' . $val->image_url . '" alt="' . $val->username . '\'s Room" style="width: 100%">';
		$item .= '<span class="caption">' . $val->username . '</span></a></div>';
		//&disable_sound=1&embed_video_only=1
		return $item;
	}
	
	function raw_output($user){
		echo '<span>';
		echo $user->username;
		echo '</span><br>'.PHP_EOL;
	}

}