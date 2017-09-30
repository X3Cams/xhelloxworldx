#Misc Functions
###Some of shit that actually worked
```php
//returns the json file as individual lines of independant json
   function json_oneline(){
       $url = 'https://chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=KZ7tX';
       $gender_options = array('f', 'm', 'c', 't');
       $jcontent = file_get_contents($url);
       $jtemp = tmpfile();
       fwrite($jtemp, $jcontent);
       $dil = '},';
       $fnd = array('},', '\'{');
       $rep = array('}];},', '\'[{');
       $jfile =explode($dil, str_ireplace($fnd, $rep, htmlspecialchars($jcontent)));
       return $jfile;
       //array_multisort($jfile, $gender_options, SORT_REGULAR, $stdin->num_users, SORT_DESC);
       //$jfile->offsetSet(NULL, 'gender');
       //var_dump($jfile->offsetGet());
   }
```
##jWalk: json_decode + array_walk
###Shit doesn't get more real than the price you pay to jWalk();
They say the only people to come out on the other side were never on our's to begin with. I heard they have no souls and are as cold as ice. So, Conadians who drive commuter cars or mini-vans... Canadians. 

```php
    function jwalk($var) {
    
    if($var->gender == 'f'){
    	echo '<ul>';
    	echo '<li><iframe src="https://chaturbate.com/fullvideo/?b='.$var->username.'" width="600" height="500"><iframe></li>';
    	echo '<li>'.$var->username.'<ul>';
    	echo '<li>'.$var->room_subject.'</li>';
    	echo '<li>'.$var->is_hd.'</li>';
    	echo '<li>'.$var->is_new.'</li>';
    	echo '<li>'.$var->seconds_online.'</li>';
    	echo '<li>'.$var->gender.'</li>';
    	echo '<li>'.$var->recorded.'</li>';
    	echo '<li>'.$var->current_show.'</li>';
    	//echo '<li>'.$var->chat_room_url.'</li>';
    	echo '<li>'.$var->image_url.'</li>';
    	echo '<li>'.$var->image_url_360x270.'</li>';
    	echo '<li>'.$var->block_from_states.'</li>';
    	echo '<li>'.$var->block_from_countries.'</li>';
    	//echo '<li>'.$var->iframe_embed.'</li>';
    	echo '<li>'.$var->num_users.'</li>';
    	echo '<li>'.$var->num_followers.'</li></ul></li>';
    	echo '</ul>';
    	}
    }
 ```
##Items: formatting with PHP + HTML + JSON
####Itemized shit that make it not look like shit. Well, not like your shit!
This is one I'll be using in some capacity.
```php
    function items($val) {
    	$url = urlencode($val->chat_room_url_revshare);
    	//$video = str_replace('bgcolor="white"', 'bgcolor="transparent"', $url);
    	//$video = $val->username;
    	$video = $val->username;
    	$item = '<a data-target="#image-modal" data-toggle="modal" data-img="'.$val->image_url_360x270.'" data-username="'.$val->username.'" data-displayname="'.$val->display_name.'" data-birthday="'.$val->birthday.'" data-age="'.$val->age.'" data-gender="'.$val->gender.'" data-subject="'.$val->room_subject.'"';
    	$item .= ' data-hd="no" data-duration="'.$val->seconds_online.'" data-lang="'.$val->spoken_languages.'" data-show="'.$val->current_show.'" data-video="'.$video.'">';
    	$item .= '<img src="'.$val->image_url.'" alt="'.$val->username.'\'s Room" style="width: 100%">';
    	$item .= '<span class="caption">'.$val->username.'</span></a>';
    	//&disable_sound=1&embed_video_only=1
    	return $item;
    
    }
 ```
 ##Shit that obviously wouldn't work but tried anyway
 Remember the time you told your mom you were going to a friends house that you were going to a friend's house who you were allowed to go see but you were holding a video game that only the friend you weren't supposed to visit, had a console for? It's kind of like that. 
 
 For anyone that wasn't around for the days where we borrowed and traded video games, here's a better one for you. Rememnber that time where you were confused by an analogy...
 ```php   
    //element('username', $jfile);
    //print_r(array_walk($jfile->gender->offsetGet('f'), 'items'));
        $gender =array();
        $male =array();
        $female=array();
        $couple=array();
        $trans=array();
    
    //echo "<iframe src='https://chaturbate.com/affiliates/in/?tour=9oGW&campaign=KZ7tX&track=embed&room=".$var->username."&bgcolor=transparent&disable_sound=1&embed_video_only=1&target=_parent' height=600 width=800 style='border: none;'></iframe>";
    		//$type = array($var->is_new, $var->num_followers, $var->iframe_embed_vo, $var->display_name, $var->recorded, $var->iframe_embed_revshare, $var->chat_room_url, $var->location, $var->block_from_states, $var->chat_room_url_revshare, $var->username, $var->spoken_languages, $var->image_url_360x270, $var->current_show, $var->birthday, $var->is_hd, $var->block_from_countries, $var->seconds_online, $var->gender, $var->age, $var->num_users, $var->image_url, $var->room_subject);<i class="fa"></i>
    function gender_list($var){
    	$male =array();
    	$female=array();
    	$couple=array();
    	$trans=array();
    	$gender = array($female, $male, $couple, $trans);
    	switch ($var->username->gender) {
    		case $var->username->gender == 'f':
    			 	array_push($female, $var->username);
    			break;
    		case $var->username->gender == 'm':
    			array_push($male, $var->username);
    			break;
    		case $var->username->gender == 'c':
    			array_push($couple, $var->username);
    			break;
    		case $var->username->gender == 't':
    			array_push($trans, $var->username);
    			break;
    	}
    
    	return $gender;
    }
```
