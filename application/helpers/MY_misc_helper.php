<?php

function multi_file_compare($files = array()){
	if(empty($files)) { $files = array('https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js', 'https://oss.maxcdn.com/respond/1.4.2/respond.min.js', '"http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js', 'http://cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js'); }
	foreach ($files as $x => $y) {

		$i=0;
		do {
			$ch = curl_init('$y');
			$ch2 = curl_init('$files[$i]');



			if(md5(curl_exec($ch)) === md5(curl_exec($ch2))){
				echo $i.' <span style="background-color: green;">'.$files[$i] . 'are a match.</span><br>';
			}else{
				echo '<span style="background-color: red;">'.$files[$i] . 'are different. </span><br>';
			}
			$i++;
		}
		while ($i < count($files));
	}
}

function gridy($val)
{
	if($val->gender != 'm' || $val->gender != 't') {
		$item = '<div class="col-xs-1 col-sm-2 col-md-2 col-lg-2"> <a data-target="#image-modal" data-toggle="modal" data-img="' . $val->image_url_360x270 . '" data-username="' . $val->username . '" data-displayname="' . $val->display_name . '" data-birthday="' . $val->birthday . '" data-age="' . $val->age . '" data-gender="' . $val->gender . '" data-subject="' . $val->room_subject . '"';
		$item .= ' data-hd="no" data-duration="' . $val->seconds_online . '" data-lang="' . $val->spoken_languages . '" data-show="' . $val->current_show . '" data-video="' . $val->username . '">' . PHP_EOL;
		$item .= '<img src="' . $val->image_url . '" alt="' . $val->username . '\'s Room" style="width: 100%">' . PHP_EOL;
		$item .= '<span class="caption">' . $val->username . '</span></a></div>' . PHP_EOL;
		//&disable_sound=1&embed_video_only=1
		echo $item;
	}
}
