<?php
public function video($model)
{
	$html = '<video id="example-video" class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%" data-setup="{}">';
	$html .= '<source src="http://bongacams.com/chat-popup/pippalee?hit_url=http://bongacams.com/track/D384168" type="application/x-mpegURL">';
	$html .= '</video>';
	$html .= '<script src="https://unpkg.com/video.js/dist/video.js"></script>';
	$html .= '<script src="https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js"></script>';
	$html .= '<script>';
	$html .= "var player = videojs('example-video')";
	$html .= "player.play();";
	$html .= '</script>';
	//https://edge51.stream.highwebmedia.com/live-edge/ne2sh-sd-0270549d18bcb6ae57cfa5694fc7ef5adbc72a4648e8a421ecb708f7c5afc727_fast_aac/playlist.m3u8
}
?>
video
    id="my-player"
    class="video-js"
    controls
    preload="auto"
    poster="//vjs.zencdn.net/v/oceans.png"
    data-setup='{}'>
  <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
  <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
  <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="http://videojs.com/html5-video-support/" target="_blank">
      supports HTML5 video
    </a>
  </p>
</video>
