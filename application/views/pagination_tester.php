<?php

	// echo "<div class=\"user-message\"><p>Hi Robert, couple things. First off, if you thought I had you type your name into my phone because I forgot it, PSSSSH!!! I have never heard anything more preposterous in all of my days... the ones that don't end in, \"Y\" at least. Ok, so that's part of it but there's another reason and it has to do with the site. I'm a new-ish type of developer called a, \"U/X\" or \"User-Experience\" Developer which means I'm trained to always think of the user first. I try to stay sharp by attempting to always think of others first. ";
	// echo "So almost everyone in my phone typed their own name in. That's how I know to call you Robert rather than anything related to Bob. In essence, I am an interface and the goal is to provide a better experience to the people around me than they would have had without me present. It's harder than it sounds. Sweet! So, this site has incomming feeds from Ladies, Dudes, 2+ people, and Trans (who aren't always very forthcuming about what's going on down there). I'm showing only ladies and couples but if you get a \"lost\" ladie with a place to hang a towl, sorry! Lol check it -> <img src='".$boobs."'> Lucky for you its titties, the last guy got what looked like a baby squirrel...<br>
	// <p>Feel free to text me with any questions, If I don\'t answer right away I may have fallen asleep on my keyboard (I soo wish that was a joke).</p>";
	echo '<div class="user-message"><p>Hi, thanks for checking out the project. X3cams: If you know the W3c or W3Schools then you know that the, "W3" is a reference to, "www" before an address. Essentially, this makes X3Cams -> xxx.cams.com. Also, I\'ll be able to use stuff like <i class="fa fa-heartbeat" aria-hidden="true"></i>, <i class="fa fa-heart" aria-hidden="true"></i>, <i class="fa fa-heart-o" aria-hidden="true"></i>
	for branding since I get the ASCII Heart "'.htmlspecialchars('<3').'," effect with X3 (I think I\'ll call it the heart and crossbones).  As you can tell, it\'s not<br> fully functional and opening model pages has some interesting results err... before I 100% intentionally disabled the click-to-live-feed feature. . But the responsive grid system is functional (auto adjusting from mobile to desktop/laptop and even freaking television) and I\'m able to pull feeds form <a href="http://chaturbate.com" target="_blank">Chaturbate.com</a> and <a href="http://bongabams.com" target="_blank">bongabams.com</a> (this one is annoying to view on theirserver) BongaCams.com and more sites will be supported prior to release... I think. </p></div>';
		echo '<div class="grid">';



		for($i=0; $i<=count($xcams); $i++) {
			
			if ($i <= 24 && $xcams[$i]->gender == 'f' || $xcams[$i]->gender == 'c') {
				$url = urlencode($xcams[$i]->chat_room_url_revshare);
				//$video = str_replace('bgcolor="white"', 'bgcolor="transparent"', $url);
				//$video = $xcams[$i]->username;
				$video = $xcams[$i]->username;
				$item = '<div class="col-xs-1 col-sm-2 col-md-2 col-lg-2">' . PHP_EOL;
				$item .= '<a data-target="#image-modal" data-toggle="modal" data-img="' . $xcams[$i]->image_url_360x270 . '" data-username="' . $xcams[$i]->username . '" data-displayname="' . $xcams[$i]->display_name . '" data-birthday="' . $xcams[$i]->birthday . '" data-age="' . $xcams[$i]->age . '" data-gender="' . $xcams[$i]->gender . '" data-subject="' . $xcams[$i]->room_subject . '"';
				$item .= ' data-hd="no" data-duration="' . $xcams[$i]->seconds_online . '" data-lang="' . $xcams[$i]->spoken_languages . '" data-show="' . $xcams[$i]->current_show . '" data-video="' . $video . '">' . PHP_EOL;
				$item .= '<img src="' . $xcams[$i]->image_url . '" alt="' . $xcams[$i]->username . '\'s Room" style="width: 100%">' . PHP_EOL;
				$item .= '<span class="caption">' . $xcams[$i]->username . '</span>' . PHP_EOL;
				$item .= '</a></div>' . PHP_EOL;
				//&disable_sound=1&embed_video_only=1
				
                if(!isset($no)){ $no = 0; }
				if (($no++) == 1) {
					echo '<div class="row">' . PHP_EOL;
					echo $item;
				} elseif (($no++) == 7) {
					echo $item;
					echo '</div>' . PHP_EOL;
				} elseif (($no++) > 1 && ($no++) < 7) {
					echo $item;
				} else {
					echo '<div class="row">' . PHP_EOL;
					echo $item;
					return $no = 0;
				}
				$no++;
			}
		}
		echo '</div>';

		// function items($key, $val) {
		// 	$url = urlencode($val->chat_room_url_revshare);
		// 	//$video = str_replace('bgcolor="white"', 'bgcolor="transparent"', $url);
		// 	//$video = $val->username;
		// 	$video = $val->username;
		// 	$item = '<a data-target="#image-modal" data-toggle="modal" data-img="'.$val->image_url_360x270.'" data-username="'.$val->username.'" data-displayname="'.$val->display_name.'" data-birthday="'.$val->birthday.'" data-age="'.$val->age.'" data-gender="'.$val->gender.'" data-subject="'.$val->room_subject.'"';
		// 	$item .= ' data-hd="no" data-duration="'.$val->seconds_online.'" data-lang="'.$val->spoken_languages.'" data-show="'.$val->current_show.'" data-video="'.$video.'">';
		// 	$item .= '<img src="'.$val->image_url.'" alt="'.$val->username.'\'s Room" style="width: 100%">';
		// 	$item .= '<span class="caption">'.$val->username.'</span></a>';
		// 	//&disable_sound=1&embed_video_only=1
		//
		// }
		// array_walk_recursive($jfile, 'items');


				//$this->load->view('grid_temp', $xcams);
				//$this->load->view('bongo', $xcams);
				//echo $pagination_bar;
		?>
		<div id="image-modal" class="modal imodal fade" role="dialog" tabindex="-1" aria-labelledby="modal-video-label">
			<?php $this->load->view('modals/model_info'); ?>
		</div>
	<div class="container-fluid"><?php echo $this->pagination->create_links(); ?></div>
	<iframe src='https://chaturbate.com/fullvideo/?b=<?php echo $xcams[0]->username; ?>' height=600 width=800 style='border: none;'></iframe>
<!--https://chaturbate.com/affiliates/in/?tour=dTm0&campaign=KZ7tX&track=embed&bgcolor=transparent&disable_sound=1&embed_video_only=1-->