<?php
	
	//function something($key, $val){
		//echo "key =".$key->username." and val = ".print_r($val)."<br>";
//	}
	//print_r($xcams);
	//array_walk_recursive($xcams, 'gridy');
	//$url = json_decode(file_get_contents('https://x3cams.chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=KZ7tX'));
	//print_r(array_walk_recursive($url, 'gridy'));
	//print_r($xcams);
$model_rows = array_chunk($xcams, 12);
array_walk_recursive($model_rows, 'gridy');
//$this->pagination->render($xcams);
?>
<div class="container-fluid"><?php echo $this->pagination->create_links(); ?></div>
<div id="image-modal" class="modal imodal fade" role="dialog" tabindex="-1" aria-labelledby="modal-video-label">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title"></h4>
            </div>
            <div class="modal-body">
		  <span class="model-video">
			 
		  </span>
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