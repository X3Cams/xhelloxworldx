# Angel's Environment-Specific Shit!
### Notes, Reminders, Ideas and other Bullshit

In case you haven't gotten the message this stuff may not pertain to anyone else on the planet.
I'm only writing this because I don't plan on adding it to the documentation but I'm forgetful
so theres a chance it will find it's way in there eventually. My luck says that if that happens
then this will be the most viewed page of the entire thing (unless I decide to leave intentionally,
then it will have the stealth of spec ops).

## CLI - Bullshit that Angel will forget he has

`less2sass` - converter with simple syntax that does exactly what it says

	less2sass filename  			# output path is $pwd.
	less2sass filename, filename 	# multiple files.

`less-scss-convertor` - Same thing as less2sass, not as strict on valid less syntax.

	less-scss-convertor filename 	# Not good at multiple file processing
									# Output to ./sass

`node-sass` - Sass compiler and watcher. comiles any scss file saved to a specifide directory.

	node-sass [options] input [output] or cat input | node-sass > output

	Current watch command in use:
	 node-sass -w ./src/sass/frontend.scss -o ./assets/dist/css --source-map true --source-map-contents sass --output-style compressed --follow

	-w, --watch                Watch a directory or file
	-r, --recursive            Recursively watch directories or files
	-o, --output               Output directory
	-x, --omit-source-map-url  Omit source map URL comment from output
	-i, --indented-syntax      Treat data from stdin as sass code (versus scss)
	-q, --quiet                Suppress log output except on error
	-v, --version              Prints version info
	--output-style             CSS output style (nested | expanded | compact | compressed)
	--indent-type              Indent type for output CSS (space | tab)
	--indent-width             Indent width; number of spaces or tabs (maximum value: 10)
	--linefeed                 Linefeed style (cr | crlf | lf | lfcr)
	--source-comments          Include debug info in output
	--source-map               Emit source map
	--source-map-contents      Embed include contents in map
	--source-map-embed         Embed sourceMappingUrl as data URI
	--source-map-root          Base path, will be emitted in source-map as is
	--include-path             Path to look for imported files
	--follow                   Follow symlinked directories
	--precision                The amount of precision allowed in decimal numbers
	--error-bell               Output a bell character on errors
	--importer                 Path to .js file containing custom importer
	--functions                Path to .js file containing custom functions
	--help                     Print usage info


## SASS - Syntactically Awesome <del>Style Sheets</del> Horse shit

Currently anything that needs to be compiled prior to production is in src. so whether it's Gulp, Grunt, or God knows what other task runner get's used, it's going to be reading primarily out of that folder.

###src -> sass
Pretty self explanatory. in the immediate folder is frontend.scss, everything converges on it and it is loaded into frontend.css in /assets/dest/css. The frontend folder is for any additional files to keep css organized. the _frontend folder is an alias aka shortcut folder to /node_modules/bootstrap-sass/assets/styleseets


#Ideas
###What produces this type of shit?!
Start adminlte module within codeigniter but from a CDN. Load time may increase but if not too much it may be worth the server resources it saves.


######This has been another page for the shittiest documentation ever! A window into the mind of Angel, because a window anywhere else would be better!
