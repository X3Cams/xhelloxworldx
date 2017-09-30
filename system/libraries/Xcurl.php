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
 */
 defined('BASEPATH') OR exit('No direct script access allowed');

 /**
  * cURL custom library for CodeReactor by Angel Aces
  */
 class CI_Xcurl {

 	public function __construct()
 	{
 		$this->CI =& get_instance();
 		log_message('info', 'Xcurl Class Initialized');
		$origin = base_url();
		$headers = array('Accept: text/plain', 'Accept-Charset: utf-8', 'Accept-Encoding: gzip, deflate', 'Accept-Language: en-US', 'KeepAlive: Off', 'Accept-Datetime: Thu, 31 May 2007 20:35:00 GMT', 'Authorization: Basic', 'Cache-Control: no-cache', 'Content-Type: application/x-www-form-urlencoded', 'From: user@example.com', 'Host: en.wikipedia.org:80', 'Max-Forwards: 10', 'Origin: $origin', 'Pragma: no-cache');
 	}


	/**
	 * cURL2String
	 *
	 * returns an XML resource filtered by arguments within the headers
	 *
	 * @todo	Make function for Multi Init cURL with variable output method
	 * @param	Just a url, nothing after .com
	 * @param	Arguments/Headers	an array of whatever GET server arguments came after @param 1.
	 * @return	returns freaking everything
	 */
	 public function curl2string($url, $headers = array())
	{
		$curl = curl_init();
		curl_setopt_array($curl, array(
			CURLOPT_AUTOREFERER => TRUE,
		   	CURLOPT_RETURNTRANSFER => 1,
		    CURLOPT_URL => $url,
			CURLOPT_HEADER => FALSE,
			CURLOPT_HTTPHEADER => $headers,
		    CURLOPT_USERAGENT => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
		));

 		$result = curl_exec($curl);
		return $result;
		curl_close($curl);

		/*
		* TODO 1: make passive detection of $url (string vs array)
		* TODO 2: make an XML helper
		* TODO 3: make a JSON helper
		* TODO 4: Make cURL function that handles all common arguments to cURL.
		*/
	}

// ------------------------------------------------------------------------
}
