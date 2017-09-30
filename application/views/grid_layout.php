<div class="container">

		<?php
		$files = array('https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js', 'https://oss.maxcdn.com/respond/1.4.2/respond.min.js', '"http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js', 'http://cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js');
		foreach ($files as $x => $y) {

			echo $y. 'and:<br>';
			$i=0;
			do {
				$ch = curl_init('$y');
				$ch2 = curl_init('$files[$i]');



				if(md5(curl_exec($ch)) === md5(curl_exec($ch2))){
					echo $i.' <span style="background-color: green;">'.$files[$i] . 'are a match.</span><br>';
				}else{
					echo '<span style="background-color: red;">'.$files[$i] . 'are different. </span><br>';
				}
				$i++;
			}
			while ($i < count($files));
		}
		?>


		<div class="col-lg-4 live-less-editor-hovercontainer" data-relatedvars="panel-bg,panel-border-radius,panel-body-padding,panel-border-radius,panel-footer-bg,panel-inner-border,panel-default-border,panel-default-text,panel-default-heading-bg,panel-primary-border,panel-primary-text,panel-primary-heading-bg,panel-success-border,panel-success-text,panel-success-heading-bg,panel-info-border,panel-info-text,panel-info-heading-bg,panel-warning-border,panel-warning-text,panel-warning-heading-bg,panel-danger-border,panel-danger-text,panel-danger-heading-bg,panel-heading-padding,panel-footer-padding">
	<div class="panel planel-primary">
		<div class="panel-heading">
			Name: Austin Bennett
		</div>
		<div class="panel-body">
			<?php
				$dl = 'http://api.sportradar.us/nascar-ot3/mc/2017/drivers/list.xml?api_key=4xauxekdp37cn2zmcffq3b3q';

				$hdrs = array('track' => 'default', 'tour' => 'x1Rd', 'campaign' => 'KZ7tX', 'c' => '15', 'p' => '1', 'gender' => 'f');
				$atts = array('series', 'season', 'driver', 'car', 'manufacturer', 'engine', 'owner', 'track-type-split', 'record', 'track-split', 'race-split');

// Initialize the XML parser
$parser=xml_parser_create();

// Function to use at the start of an element
function start($parser,$element_name,$element_attrs) {
  switch($element_name) {
    case "series":
    echo "-- Note --<br>";
    break;
    case "season":
    echo "Season: ";
    break;
    case "driver":
    echo "Driver: ";
    break;
	case "car: ":
	echo "Car: ";
	break;
	case "manufacturer: ";
    case "track-type-split":
    echo "Track Type Split: ";
    break;
    case "Record":
    echo "Record: ";
	break;
	case "track-split":
	echo "Track Split: ";
	break;
	case "race-split: ":
	echo "Race Split: ";
  }
}

// Function to use at the end of an element
function stop($parser,$element_name) {
  echo "<br>";
}

// Function to use when finding character data
function char($parser,$data) {
  echo $data;
}

// Specify element handler
xml_set_element_handler($parser,"start","stop");

// Specify data handler
xml_set_character_data_handler($parser,"char");

// Open XML file
//$fp=fopen("note.xml","r");
$fp=curl2xml('https://chaturbate.com/feed/latest/?gender=f&wm=KZ7tX');

// Read data
while ($data=fopen('https://chaturbate.com/feed/latest/?gender=f&wm=KZ7tX',4096)) {
  xml_parse($parser,$data,feof($fp)) or
  die (sprintf("XML Error: %s at line %d",
  xml_error_string(xml_get_error_code($parser)),
  xml_get_current_line_number($parser)));
}

// Free the XML parser
xml_parser_free($parser);
			?>
		</div>
		<div class="panel-footer">
			Nickname: Angel Aces
		</div>
	</div>
</div>
</div>
