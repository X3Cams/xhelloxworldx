<?php
for($i=1; $i<=count($xcams); $i++) {

	if($i <= 24 && $xcams[$i]->gender != 'm' ){
		if($i !=0 && ($i+1)%6) { echo '<div class="row" gutter-10>'; }
	echo '<div class="col-xs-2">';
	echo '<a data-target="#image_modal" data-toggle="modal" data-img="'.$xcams[$i]->profile_images->profile_image.'" data-display_name="'.$xcams[$i]->display_name.'" data-displayname="'.$xcams[$i]->display_name.'" data-display_age="'.$xcams[$i]->display_age.'" data-gender="'.$xcams[$i]->gender.'" data-subject="'.$xcams[$i]->chat_status.'"';
	echo ' data-hd="no" data-duration="'.$xcams[$i]->online_time.'" data-lang="'.$xcams[$i]->primary_language.'" data-show="'.$xcams[$i]->status.'" data-video="'.$xcams[$i]->embed_chat_url.'">';
	echo '<img src="'.$xcams[$i]->image_url.'" alt="'.$xcams[$i]->display_name.'\'s Room" style="width: 100%"></a><br>';
	echo '<a data-target="#image_modal" data-toggle="modal" data-img="'.$xcams[$i]->profile_images->profile_image.'" data-display_name="'.$xcams[$i]->display_name.'" data-displayname="'.$xcams[$i]->display_name.'" data-display_age="'.$xcams[$i]->display_age.'" data-age="'.$xcams[$i]->age.'" data-gender="'.$xcams[$i]->gender.'" data-subject="'.$xcams[$i]->chat_status.'" data-hd="no" data-duration="'.$xcams[$i]->online_time.'" data-lang="'.$xcams[$i]->primary_language.'" data-show="'.$xcams[$i]->status.'" data-video="'.$xcams[$i]->embed_chat_url.'">';
	echo '<span class="caption">'.$xcams[$i]->display_name.'</span></a>';
	echo '</div>';
	if($i !=0 && ($i+1)%6) { echo '</div>'; }
	}
}
?>
