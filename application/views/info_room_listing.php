<div class="container">
	<div class="row">
	<?php

		do {
			if(empty($i)){ $i = 0; }
			if($i==0) {
				echo '<div class="col-md-offset-12">
		            <div class="bs-componentdata-relatedvars="panel-bg,panel-border-radius,panel-body-padding,panel-border-radius,panel-footer-bg,panel-inner-border,panel-default-border,panel-default-text,panel-default-heading-bg,panel-primary-border,panel-primary-text,panel-primary-heading-bg,panel-success-border,panel-success-text,panel-success-heading-bg,panel-info-border,panel-info-text,panel-info-heading-bg,panel-warning-border,panel-warning-text,panel-warning-heading-bg,panel-danger-border,panel-danger-text,panel-danger-heading-bg,panel-heading-padding,panel-footer-padding">';
			}else if(ceil(($i+1)%3)==0) {
				echo '</div></div><div class="col-md-2">
		            <div class="bs-componentdata-relatedvars="panel-bg,panel-border-radius,panel-body-padding,panel-border-radius,panel-footer-bg,panel-inner-border,panel-default-border,panel-default-text,panel-default-heading-bg,panel-primary-border,panel-primary-text,panel-primary-heading-bg,panel-success-border,panel-success-text,panel-success-heading-bg,panel-info-border,panel-info-text,panel-info-heading-bg,panel-warning-border,panel-warning-text,panel-warning-heading-bg,panel-danger-border,panel-danger-text,panel-danger-heading-bg,panel-heading-padding,panel-footer-padding">';
			}
			echo '<br>';
			echo '<div class="panel panel-info">';
			echo '<div class="panel-heading"><h3 class="panel-title">'. $xcams[$i]->username .'</h3></div>';
			echo '<div class="panel-body"><img src="'. $xcams[$i]->image_url_360x270 .'" alt="'. $xcams[$i]->username .'-preview image"></div>';
			echo '<div class="panel-footer">'. $xcams[$i]->room_subject .'</div>';
			echo '</div>';

			$i++;
		} while($i <= count($xcams));
	?>
</div>
<div id="grid"></div>
</div>
