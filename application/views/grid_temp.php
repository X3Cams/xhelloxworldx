<?php
// foreach($xcams as $x => $y) {
// 	if($xcams[$i]->gender == 'f' && $xcams[$i]->age < 32 && $x < 14){
// 		if($xcams[$i]->is_hd == 1){ $xcams[$i]->hd = 'yes'; }else{ $xcams[$i]->hd ='no'; }
// 		if($x!=0 && ($x+1)%6){
// 			if($x!=0 && (($x+1)%90)){
// 				echo '</div>';
// 			}else{
// 					echo '</div>';
// 					echo '<div class="row">';
// 			}
// 		}
// 		if($x==0){ echo '<div class="row">'; }
//
// 	 	if($x%10){
// 			echo '<div class="col-xs-2">';
// 		}else{
// 			echo '<div class="col-xs-1 col-xs-offset-1">';
// 		}
// 		echo '<a data-target="#image_modal" data-toggle="modal" data-img="'.$xcams[$i]->image_url_360x270.'" data-username="'.$xcams[$i]->username.'" data-displayname="'.$xcams[$i]->display_name.'" data-birthday="'.$xcams[$i]->birthday.'" data-age="'.$xcams[$i]->age.'" data-gender="'.$xcams[$i]->gender.'" data-subject="'.$xcams[$i]->room_subject.'" data-hd="'.$xcams[$i]->hd.'" data-duration="'.$xcams[$i]->seconds_online.'" data-lang="'.$xcams[$i]->spoken_languages.'" data-show="'.$xcams[$i]->current_show.'"><img id="'.$xcams[$i]->username.'" src="'.$xcams[$i]->image_url.'" alt="'.$x.'" title="'.$xcams[$i]->username.'-'.$xcams[$i]->display_name.'"></a>';
// 		echo '</div>';
// 	}pp
// }
//print_r(get_defined_vars());


// function model_card($item, $key) {
// 	echo '<div class="col-sm-2 col-xs-offset-1">';
// 	echo '<a data-target="#image_modal" data-toggle="modal" data-img="'.$xcams[$i]->image_url_360x270.'" data-username="'.$xcams[$i]->username.'" data-displayname="'.$xcams[$i]->display_name.'" data-birthday="'.$xcams[$i]->birthday.'" data-age="'.$xcams[$i]->age.'" data-gender="'.$xcams[$i]->gender.'" data-subject="'.$xcams[$i]->room_subject.'" data-hd="no" data-duration="'.$xcams[$i]->seconds_online.'" data-lang="'.$xcams[$i]->spoken_languages.'" data-show="'.$xcams[$i]->current_show.'">';
// 	echo '<img src="'.$xcams[$i]->image_url.'" alt="'.$xcams[$i]->username.'\'s Room" style="width: 100%"></a><br>';
// 	echo '<a data-target="#image_modal" data-toggle="modal" data-img="'.$xcams[$i]->image_url_360x270.'" data-username="'.$xcams[$i]->username.'" data-displayname="'.$xcams[$i]->display_name.'" data-birthday="'.$xcams[$i]->birthday.'" data-age="'.$xcams[$i]->age.'" data-gender="'.$xcams[$i]->gender.'" data-subject="'.$xcams[$i]->room_subject.'" data-hd="no" data-duration="'.$xcams[$i]->seconds_online.'" data-lang="'.$xcams[$i]->spoken_languages.'" data-show="'.$xcams[$i]->current_show.'">';
// 	echo '<span class="caption">'.$xcams[$i]->username.'</span></a>';
// 	echo '</div>';
// }

//for($i=1; $i<+count($xcams); $i++) {
echo '<div class="grid">';
for($i=1; $i<=count($xcams); $i++) {

	//str_replace('bgcolor=white', 'bgcolor=transparent&disable_sound=1&embed_video_only=1&target=_self', $xcans->chat_room_url_revshare)
    if($i !=0 && ($i+1)%6) { echo '<div class="grid">'; }//elseif(!$xcams[$i]) { echo '</div>'; }
	if($i <= 24 && $xcams[$i]->gender != 'm' ){
		$url = urlencode($xcams[$i]->chat_room_url_revshare.'&disable_sound=1&embed_video_only=1');
	echo '<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">';
	echo '<a data-target="#image-modal" data-toggle="modal" data-img="'.$xcams[$i]->image_url_360x270.'" data-username="'.$xcams[$i]->username.'" data-displayname="'.$xcams[$i]->display_name.'" data-birthday="'.$xcams[$i]->birthday.'" data-age="'.$xcams[$i]->age.'" data-gender="'.$xcams[$i]->gender.'" data-subject="'.$xcams[$i]->room_subject.'"';
	echo ' data-hd="no" data-duration="'.$xcams[$i]->seconds_online.'" data-lang="'.$xcams[$i]->spoken_languages.'" data-show="'.$xcams[$i]->current_show.'" data-video="'.str_replace('bgcolor="white"', 'bgcolor="transparent"', $url).'">';
	echo '<img src="'.$xcams[$i]->image_url.'" alt="'.$xcams[$i]->username.'\'s Room" style="width: 100%">';
	//echo '<a data-target="#image_modal" data-toggle="modal" data-img="'.$xcams[$i]->image_url_360x270.'" data-username="'.$xcams[$i]->username.'" data-displayname="'.$xcams[$i]->display_name.'" data-birthday="'.$xcams[$i]->birthday.'" data-age="'.$xcams[$i]->age.'" data-gender="'.$xcams[$i]->gender.'" data-subject="'.$xcams[$i]->room_subject.'" data-hd="no" data-duration="'.$xcams[$i]->seconds_online.'" data-lang="'.$xcams[$i]->spoken_languages.'" data-show="'.$xcams[$i]->current_show.'" data-video="'.$xcams[$i]->iframe_embed.'">';
	echo '<span class="caption">'.$xcams[$i]->username.'</span></a>';
	echo '</div>';

	}
	echo '<div>';
}

?>
<div id="image-modal" class="modal imodal fade" role="dialog" tabindex="-1" aria-labelledby="modal-video-label">
	<?php $this->load->view('modals/model_info'); ?>
</div>
