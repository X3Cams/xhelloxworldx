<script type="text/javascript">
$(function () {
	var url = window.location.search.match(/url=([^&]+)/);
	if (url && url.length > 1) {
		url = decodeURIComponent(url[1]);
	} else {
		// Reference: http://petstore.swagger.io/v2/swagger.json
		url = "<?php echo site_url('api/swagger'); ?>";
		//url="virtserver.swaggerhub.com/angelxaces/xxx/1.0.0";
		//url = 'https://chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=KZ7tX';
	}

	// Pre load translate...
	if(window.SwaggerTranslator) {
		window.SwaggerTranslator.translate();
	}

	window.swaggerUi = new SwaggerUi({
		url: url,
		dom_id: "swagger-ui-container",
		supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
		onComplete: function(swaggerApi, swaggerUi){
			if(typeof initOAuth == "function") {
				initOAuth({
					clientId: "your-client-id",
					clientSecret: "your-client-secret-if-required",
					realm: "your-realms",
					appName: "your-app-name",
					scopeSeparator: ",",
					additionalQueryStringParams: {}
				});
			}

			if(window.SwaggerTranslator) {
				window.SwaggerTranslator.translate();
			}

			$('pre code').each(function(i, e) {
				hljs.highlightBlock(e)
			});

			addApiKeyAuthorization();
		},
		onFailure: function(data) {
			log("Unable to Load SwaggerUI");
		},
		docExpansion: "none",
		jsonEditor: true,
		apisSorter: "alpha",
		defaultModelRendering: 'schema',
		showRequestHeaders: true
	});

	function addApiKeyAuthorization(){
		var key = encodeURIComponent($('#input_apiKey')[0].value);
		if(key && key.trim() != "") {
			var apiKeyAuth = new SwaggerClient.ApiKeyAuthorization("api_key", key, "query");
			window.swaggerUi.api.clientAuthorizations.add("api_key", apiKeyAuth);
			//window.swaggerUi.api.clientAuthorizations.add("/affiliates/api/onlinerooms/?format=json&wm=KZ7tX");
			log("added key " + key);
		}
	}

	$('#input_apiKey').change(addApiKeyAuthorization);

	<?php
		// if you have an apiKey you would like to pre-populate on the page for demonstration purposes...
		/*
		http://api.sportradar.us/nascar-ot3/mc/2017/drivers/list.json?api_key=4xauxekdp37cn2zmcffq3b3q

			4xauxekdp37cn2zmcffq3b3q
			var apiKey = "myApiKeyXXXX123456789";
			$('#input_apiKey').val(apiKey);
		*/
		if ( !empty($api_key) )
		{
			echo 'var apiKey = "'.$api_key.'"; $("#input_apiKey").val(apiKey);';
		}
	?>

	window.swaggerUi.load();

	function log() {
		if ('console' in window) {
			console.log.apply(console, arguments);
		}
	}
});
</script>

<div id='header'>
	<div class="swagger-ui-wrap">
		<a id="logo" href=""><?php echo $site_name; ?></a>
		<form id='api_selector'>
			<div class='input'><input placeholder="http://example.com/api" id="input_baseUrl" name="baseUrl" type="text"/></div>
			<div class='input'><input placeholder="api_key" id="input_apiKey" name="apiKey" type="text"/></div>
			<div class='input'><a id="explore" href="#" data-sw-translate>Explore</a></div>
		</form>
	</div>
</div>

<div id="message-bar" class="swagger-ui-wrap" data-sw-translate>&nbsp;</div>
<div id="swagger-ui-container" class="swagger-ui-wrap"></div>
