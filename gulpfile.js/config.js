/**
 * Gulp configuration file
 */

// basic paths
var dir_bower = './bower_components',	// folder with Bower packages
	dir_npm	 = './node_modules/',		// folder with NPM packages
	dir_src = '..//src',				// folder for non-public source scripts, stylesheets, pre-processed images, etc.
	dir_asset = './assets',				// folder for public assets
	dir_dist = dir_asset + '/dist',		// destination for post-processed scripts, stylesheets and images
	dir_theme = dir_src + '/theme', 	// default folder for theme files
	npm_bs = dir_npm + '/booststrap-sass/assets',
	lte_plugins = dir_bower + '/admin-lte/plugins'

module.exports = {

	// Task: clean up destination folder
	// Plugin: del (https://github.com/sindresorhus/del)
	clean: {
		src: [
			dir_dist + "**/*",
			"!" + dir_dist + "/index.html"
		]
	},

	// Task: copy required files & folders to destination folder
	copy: {
		src: {
			// Font files from Bower packages
			fonts: [
				npm_bs + '/fonts/bootstrap/**',
				dir_bower + '/font-awesome/fonts/**',
				dir_bower + '/ionicons/fonts/**',
				dir_bower + '/0065-Licensed-to-Maime/fonts/**'
			],
			// Files (JS / CSS / etc.) directly copy to destination folder
			js_files: [
				npm_bs + '/javascripts/bootstrap-sprockets.js',
				npm_bs + '/javascripts/bootstrap.js',
				npm_bs + 'javascripts/bootstrap/**'
			]
		},
		dest: {
			fonts: dir_dist + '/fonts',
			js_files: dir_dist + '/js'
		}
	},

	// Task: concat and minify CSS files
	// Plugin: gulp-clean-css (https://github.com/scniro/gulp-clean-css)
	cssmin: {
		src: {
			// Frontend Website - 3rd party libraries
			frontend_lib: [
				dir_npm + '/assets/stylesheets/_bootstrap-sprockets.scss',
				dir_npm + '/assets/stylesheets/_bootstrap.scss',
				dir_npm + '/assets/stylesheets/bootstrap/**',
				dir_bower + '/font-awesome/css/font-awesome.min.css',
			],
			// Admin Panel - AdminLTE theme
			adminlte: [
				dir_bower + '/admin-lte/bootstrap/css/bootstrap.min.css',
				dir_bower + '/admin-lte/dist/css/AdminLTE.min.css',
				dir_bower + '/admin-lte/dist/css/skins/_all-skins.min.css',
			],
			// Admin Panel - 3rd party libraries
			admin_lib: [
				dir_bower + '/font-awesome/css/font-awesome.min.css',
				dir_bower + '/ionicons/css/ionicons.min.css',
				dir_bower + '/spectrum/spectrum.css'
			]
		},
		dest: {
			frontend: 	dir_dist + '/css',
			admin: 		dir_dist + '/admin'
		},
		dest_file: {
			frontend_lib: 	'coctail.min.css',
			adminlte: 		'adminlte-styles.min.css',
			admin_lib: 		'adminlib-styles.min.css'
		},
		options: {
			advanced: true,	// set "false" for faster operation, but slightly larger output files
			keepSpecialComments: 0
		}
	},

	// Task: compile SASS files (and concat with CSS files)
	// Plugin: gulp-sass (https://github.com/dlmanning/gulp-sass)
	sass: {
		src: {
			// Frontend Website
			frontend: [
				// Main SASS file
				dir_src + '/sass/frontend.scss',

				// Bootstrap examples (http://getbootstrap.com/getting-started/#examples)
				// Comment this to remove preset styles
				dir_src + '/css/bootstrap-examples/**',

				// Custom CSS file
				dir_src + '/css/styles.css'
			],
			// Admin Panel
			admin: [
				// Main SASS file
				dir_src + '/sass/admin.scss',

				// Custom CSS file
				dir_src + '/css/admin.css'
			]
		},
		dest: {
			frontend: 	dir_dist + '/css',
			admin: 		dir_dist + '/admin'
		},
		dest_file: {
			frontend: 	'styles.min.css',
			admin: 		'ad.min.css' // haha, see what I did there?! clever huh! ok, back to work.
		},
		options: {
			outputStyle: 'compressed'
		}
	},

	// Task: concat and minify (uglify) JS files
	// Plugin: gulp-uglify (https://github.com/terinjokes/gulp-uglify)
	uglify: {
		src: {
			// Frontend Website - 3rd party libraries
			frontend_lib: [
				dir_bower + '/jquery/dist/jquery.min.js',
				dir_bower + '/bootstrap-sass/assets/javascripts/bootstrap-sprockets.js',
				dir_bower + '/bootstrap-sass/assets/javascripts/bootstrap.js'
			],
			// Frontend Website - custom scripts
			frontend: [
				dir_src + '/js/frontend.js'
			],
			// Admin Panel - AdminLTE theme
			adminlte: [
				// use jQuery 1.x for compatibility with Grocery CRUD
				dir_bower + '/jquery-legacy/dist/jquery.min.js',
				dir_bower + '/jquery-migrate/jquery-migrate.min.js',
				dir_bower + '/admin-lte/bootstrap/js/bootstrap.min.js',
				//lte_plugins + '/fastclick/fastclick.js',
				//lte_plugins + '/slimScroll/jquery.slimscroll.min.js',
				lte_plugins + '/*/*.js',
				dir_bower + '/admin-lte/dist/js/app.min.js',
				// include other plugins below when necessary
			],
			// Admin Panel - 3rd party libraries
			admin_lib: [
				dir_bower + '/Sortable/Sortable.min.js',
				dir_bower + '/spectrum/spectrum.js',
			],
			// Admin Panel - custom scripts
			admin: [
				dir_src + '/js/admin.js'
			]
		},
		dest: {
			frontend: 		dir_dist + '/css',
			admin: 			dir_dist + '/admin'
		},
		dest_file: {
			frontend_lib: 	'cocktail.min.js',
			frontend: 		'custom.min.js',
			adminlte: 		'adminlte.min.js',
			admin_lib:		'lib.min.js',
			admin: 			'app.min.js',
		},
		options: {
		}
	},

	// Tasks: optimize images
	// Plugin: gulp-imagemin (https://github.com/sindresorhus/gulp-imagemin)
	imagemin: {
		src: dir_src + "/images/**/*.{png,jpg,gif,svg}",
		dest: dir_dist + "/images",
		options: {
		}
	}
};
