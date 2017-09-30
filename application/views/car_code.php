<div class="container">
	<h1>The Code</h1>
	<h2><small>-The Tech</small></h2>
	<?php
	$html = '<video id="example-video" class="video-js vjs-default-skin" controls preload="auto" width="640" height="268" data-setup="{}">';
	$html .= '<source src="https://edge22.stream.highwebmedia.com/live-edge/juliaiva-sd-a3019163b38ed77d1bcfe8d73458334f4dc74c32e1ae04bc1511f017002b1135_fast_aac/playlist.m3u8" type="application/x-mpegURL">';
	$html .= '</video>';
	$html .= '<script src="https://unpkg.com/video.js/dist/video.js"></script>';
	$html .= '<script src="https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js"></script>';
	$html .= '<script>';
	$html .= "var player = videojs('example-video')";
	$html .= "player.play();";
	$html .= '</script>';

	echo $html;

	?>
</div>
