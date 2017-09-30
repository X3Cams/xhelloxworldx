<div class="container">
	<div class="pre">
	<?php
	//print_r($xcams);
	$indicesServer = array('PHP_SELF', 'argv', 'argc', 'GATEWAY_INTERFACE',
	'SERVER_ADDR', 'SERVER_NAME', 'SERVER_SOFTWARE', 'SERVER_PROTOCOL',
	'REQUEST_METHOD', 'REQUEST_TIME', 'REQUEST_TIME_FLOAT', 'QUERY_STRING',
	'DOCUMENT_ROOT', 'HTTP_ACCEPT', 'HTTP_ACCEPT_CHARSET',
	'HTTP_ACCEPT_ENCODING', 'HTTP_ACCEPT_LANGUAGE', 'HTTP_CONNECTION',
	'HTTP_HOST', 'HTTP_REFERER', 'HTTP_USER_AGENT', 'HTTPS', 'REMOTE_ADDR',
	'REMOTE_HOST', 'REMOTE_PORT', 'REMOTE_USER', 'REDIRECT_REMOTE_USER',
	'SCRIPT_FILENAME', 'SERVER_ADMIN', 'SERVER_PORT', 'SERVER_SIGNATURE',
	'PATH_TRANSLATED', 'SCRIPT_NAME', 'REQUEST_URI', 'PHP_AUTH_DIGEST',
	'PHP_AUTH_USER', 'PHP_AUTH_PW', 'AUTH_TYPE', 'PATH_INFO', 'ORIG_PATH_INFO') ;

echo '<table cellpadding="10">' ;
foreach ($indicesServer as $arg) {
    if (isset($_SERVER[$arg])) {
        echo '<tr><td>'.$arg.'</td><td>';

		if( is_array($_SERVER[$arg]) || $_SERVER[$arg] == '-') { print_r($_SERVER[$arg]); } else { echo $_SERVER[$arg]; }
		echo '</td></tr>' ;
    }
    else {
        echo '<tr><td>'.$arg.'</td><td>-</td></tr>' ;
    }
}
echo '</table>' ;
phpinfo();
//print_r($_SERVER);
//print_r(headers_sent());
//print_r(http_response_code());
//print_r($_SERVER['HTTP_HOST']);
//print_r(get_headers('https://x3cams.chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=KZ7tX'));
//print_r(get_defined_constants());

/*

That will give you the result of each variable like (if the file is server_indices.php at the root and Apache Web directory is in E:\web)
*/
?>
</div>

</div>
