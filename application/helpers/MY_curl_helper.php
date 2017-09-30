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
 * @package	CodeIgniter: CI Bootstrap 3 - Angel's Reaction
 * @author	Austin "Angel Aces" Bennett AKA AngelXAces
 * @copyright	Copyright (c) 2017
 * @license	UNLICENSED
 * @link	https://codeigniter.com
 * @since	Version 3.1.2 3/30/2017
 * @filesource
 */
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * CodeIgniter cURL Helpers
 *
 * @package		CodeIgniter3.1.2
 * @param		project: CI Bootstrap 3
 * @param 		Project: CodeReactor
 * @subpackage	XHelpers (Datacomm ("X") Class)
 * @subpackage	MY Helpers (Transform CLass)
 * @subpackage	MX Helpers (View Class)
 * @category	Helpers (Base Class)
 * @author		Angel Aces (Class X Code)
 * @link		https://codeigniter.com/user_guide/helpers/file_helper.html
 */



 /**
  * Curl2string
  *
  * Creates the opening portion of the form.
  *
  * @param	string	the URI segments of the form destination
  * @param	array	a key/value pair of attributes
  * @param	array	a key/value pair hidden data
  * @return	string
  */
 function curl2string($url, $headers = array())
{
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_HEADER, TRUE);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER , TRUE);
	curl_setopt($curl, CURLOPT_BINARYTRANSFER , TRUE);
	curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
	$result = curl_exec($curl);
	return $result;
}

/*
* TODO 1: make passive detection of $url (string vs array)
* TODO 2: make an XML helper
* TODO 3: make a JSON helper
* TODO 4: Make cURL function that handles all common arguments to cURL.
*/

// ------------------------------------------------------------------------
function walker($val)
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
