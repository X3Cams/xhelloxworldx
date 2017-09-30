<?php $this->load->view('_partials/navbar'); ?>
<div class="container">
	<div class="row">
		<div class="col-sm-12">

			<div class="header"><?php $this->load->view('_partials/breadcrumb'); ?></div>
		</div>
	</div>
</div>
<?php $this->load->view($inner_view); ?></div>

<div class="container-fluid">
<?php $this->load->view('_partials/navfooter'); ?>
</div>
