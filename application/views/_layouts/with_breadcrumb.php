<?php $this->load->view('_partials/navbar'); ?>
<div class="container-fluid">
	<!-- <div class="page-header"><img class="main-logo" src="assets/dist/images/X3Cams_logo_temp.png" alt="X3Cams: Xtreme X-Rated Xperience"><h1><?php //echo $page_title; ?></h1></div>-->
	<div class="page-header">
		<?php
		if($this->uri->segment(1) == NULL || $this->uri->segment(1) == 'home'){
		echo '<img src="/assets/dist/images/x3cams_logo.svg" alt="X3Cams: Xtreme X-Rated Xperience">';
	}else{
		echo '<img class="main-logo" src="/assets/dist/images/x3cams_logo.svg" alt="X3Cams: Xtreme X-Rated Xperience">';
	}
?>
	</div>
	<?php if($this->uri->segment(1) != NULL) { $this->load->view('_partials/breadcrumb'); } ?>
</div>
<div class="container-fluid">
	<?php if(isset($c['carousel']) && $c['carousel'] == TRUE) { $this->load->view('_partials/carousel-example'); } ?>
</div>

<div class="container-fluid">
	<section class="row content">
		<?php if (isset($inner_view)) {
			$this->load->view($inner_view);
		} ?>
	</section>
</div>

<div class="container">
<?php $this->load->view('_partials/navfooter'); ?>
</div>
