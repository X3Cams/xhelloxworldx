<div class="container">
	<script type="text/javascript">

	var Example = React.createClass({
		render: function() {
			return(
				<?php
				foreach($xcams as $x => $y) {
					if($y->gender == 'f' && $y->age < 32 && $x < 14){
						if($x!=0 && ($x+1)%6){
							if($x!=0 && (($x+1)%90)){
								echo '</div>';
							}else{
									echo '</div>';
									echo '<div class="row">';
							}
						}
						if($x==0){ echo '<div class="row">'; }
					 if($y->is_hd == 1){ $y->hd = 'yes'; }else{ $y->hd ='no'; }
					 	echo '<div class="col-xs-2>';
						echo '<a  data-target="#image_modal" data-toggle="modal" data-img="'.$y->image_url_360x270.'" data-username="'.$y->username.'" data-displayname="'.$y->display_name.'" data-birthday="'.$y->birthday.'" data-age="'.$y->age.'" data-gender="'.$y->gender.'" data-subject="'.$y->room_subject.'" data-hd="'.$y->hd.'" data-duration="'.$y->seconds_online.'" data-lang="'.$y->spoken_languages.'" data-show="'.$y->current_show.'"><img id="'.$y->username.'" src="'.$y->image_url.'" alt="'.$x.'" title="'.$y->username.'-'.$y->display_name.'"></a>';
						echo '</div>';
					}
				}
				?>
			);
		},
	});






	E.render(<InfiniteGrid wrapperHeight={400} entries={items} />, document.getElementById('grid'));

	</script>
	<div id="grid">
</div>
<div id="image_modal" class="modal imodal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title"></h4>
      </div>
      <div class="modal-body">
		  <span class="model-img"></span>
		  <ul>
			  <li class="model-username"></li>
			  <li class="model-displayname"></li>
			  <li class="model-age"></li>
			  <li class="model-gender"></li>
			  <li class="model-subject"></li>
			  <li class="model-duration"></li>
			  <li class="model-hd"></li>
			  <li class="model-lang"></li>
			  <li class="model-show"></li>
		  </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
</div>
	</div>
</div>
</div>
