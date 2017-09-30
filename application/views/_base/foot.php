<?php
		foreach ($scripts['foot'] as $file)
		{
			$url = starts_with($file, 'http') ? $file : base_url($file);
			echo '<script src="'.$url.'"></script>'.PHP_EOL;
		}echo '<script>try{Typekit.load({ async: true });}catch(e){}</script>';
	?>

	<?php echo '<script>try{Typekit.load({ async: true });}catch(e){}</script>'; ?>
	<?php $this->load->view('_partials/ga') ?>
</body>
</html>
