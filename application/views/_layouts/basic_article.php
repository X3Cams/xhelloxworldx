<?php $this->load->view('_partials/navbar'); ?>
<div class="container">
	<div class="page-header"><h1><?php echo $page_title; ?></h1></div>
	<?php $this->load->view('_partials/breadcrumb'); ?>
</div>
<div class="container-fluid">
	<?php if(isset($c['carousel']) && $c['carousel'] == TRUE) { $this->load->view('_partials/carousel-example'); } ?>
</div>
<div class="container">
	<div class="row">
		<div class="col-sm-12">
			<div class="header"></div>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-12">
			<div class="content"><?php $this->load->view($inner_view); ?></div>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-6 col-md-4">
			<div class="section"></div>
		</div>
		<div class="col-sm-6 col-md-4">
			<div class="section bg-alt"></div>
		</div>
		<div class="col-sm-12 col-md-4">
			<div class="section"></div>
		</div>
	</div>
</div>


<div class="container">
<?php $this->load->view('_partials/navfooter'); ?>
</div>
