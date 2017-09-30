<?php
echo '<!DOCTYPE html>';
echo '<html lang="en">
<head>';
	$this->load->view('_partials/favicons');

	echo '<base href="'.$base_url.'" />';
	//echo $fail_safe;
	//echo $page_title;


		foreach ($meta_data as $name => $content)
		{
			if (!empty($content))
				echo '<meta name="'.$name.'" content="'.$content.'">'.PHP_EOL;
		}
		echo '<meta charset="utf-8">';
		echo '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
		foreach ($stylesheets as $media => $files)
		{
			foreach ($files as $file)
			{
				$url = starts_with($file, 'http') ? $file : base_url($file);
				echo "<link href='$url' rel='stylesheet' media='$media'>".PHP_EOL;
			}
		}

		foreach ($scripts['head'] as $file)
		{
			$url = starts_with($file, 'http') ? $file : base_url($file);
			echo '<script src="'.$url.'"></script>'.PHP_EOL;
		}
	?>
</head>
<body class="<?php echo $body_class; ?>">
