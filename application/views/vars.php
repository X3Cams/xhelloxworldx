<?php


function walkit($key, $val)
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


//$url = 'https://chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=KZ7tX';
  //  print_r(get_class_methods('CI_Xchunky'));
	//$shit = json_decode(file_get_contents($url));

    //$callback[] = $this;
    //$callback[] = 'CI_Xchunky';
    //$callback[] = 'walk';
    //$func = $this->xchunky->walk($xcams);
    return array_walk($xcams, 'walkit');
	//array_walk_recursive($shit , array($this->xchunky, 'walk'));
