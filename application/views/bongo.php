<?php
echo '<div class="grid">';
for($i=1; $i<=count($xcams); $i++) {

	if($i <= 24 && $xcams[$i]->gender != 'm' ){
		if($i !=0 && ($i+1)%6) { echo '</div><div class="grid">'; }elseif(!$xcams[$i]) { echo '</div>'; }
	echo '<div class="col-md-1  col-sm-1  col-xs-2 col-lg-1 grid-gutter-width-10">';
	echo '<a class="thumbnail" data-target="#image_modal" data-toggle="modal" data-img="'.$xcams[$i]->profile_images->profile_image.'" data-display_name="'.$xcams[$i]->display_name.'" data-displayname="'.$xcams[$i]->display_name.'" data-display_age="'.$xcams[$i]->display_age.'" data-gender="'.$xcams[$i]->gender.'" data-subject="'.$xcams[$i]->chat_status.'"';
	echo ' data-hd="no" data-duration="'.$xcams[$i]->online_time.'" data-lang="'.$xcams[$i]->primary_language.'" data-show="'.$xcams[$i]->status.'" data-video="'.$xcams[$i]->embed_chat_url.'">';
	echo '<img src="'.$xcams[$i]->profile_images->profile_image.'" alt="'.$xcams[$i]->display_name.'\'s Room" style="width: 100%">';
	//echo '</a><br><a data-target="#image_modal" data-toggle="modal" data-img="'.$xcams[$i]->profile_images->profile_image.'" data-display_name="'.$xcams[$i]->display_name.'" data-displayname="'.$xcams[$i]->display_name.'" data-display_age="'.$xcams[$i]->display_age.'" data-gender="'.$xcams[$i]->gender.'" data-subject="'.$xcams[$i]->chat_status.'" data-hd="no" data-duration="'.$xcams[$i]->online_time.'" data-lang="'.$xcams[$i]->primary_language.'" data-show="'.$xcams[$i]->status.'" data-video="'.$xcams[$i]->embed_chat_url.'">';
	echo '<span class="caption">'.$xcams[$i]->display_name.'</span></a>';
	echo '</div>';

	}
}
?>
