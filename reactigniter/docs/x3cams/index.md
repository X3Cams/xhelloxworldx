# X3Cams
##Real-Time Adult Entertainment Integration

Currently supporting [chaturbate](chaturbate.com) but will add more. The focus is to get to a point where UX is the focus. For the sake of this documentation screenshots will have the `offline user` image rather than graphic content (when not impractical viewing a couple naked people isn't going to kill you... I don't think). The point of this is to be informative. Take it from me, after working a few hours on any given portion things can get a bit... distracting.

##MkDocs Commands
* `mkdocs build` - Build the documentation site.
* `mkdocs help` - Print this help message.

##Website API

* `$x3cams` - Object
* `$x3cams->object_key` - call all the keys in x3cams
* `npm run [List Item Below]`:
	* `build-css` - Builds **ALL** of src/sass, everything in it.
	* `clean` - rm -rf build && mkdir build
	* `build-css` - *node-sass -w src/sass/frontend.scss -o assets/dist/css --source-map true --source-map-contents scss --output-style compressed --follow*
	* `build-server` - babel -d ./build ./server -s
	* `build` - npm run build-css && npm run build-server
	* `transpile` - babel src/js -d assets/dist/js --presets=es2015,react
	* `lint` - eslint source/ --quiet
	* `start` - node ./build/index.js
	* `start2` - webpack-dev-server --hot
	* `debug` - node --debug ./build/index.js
	* `test` - mocha --compilers js:babel-core/register App.jsx
	* `validate` - npm run lint; npm run test && npm outdated --depth 0
	* `babel-opt` - babel src/js/script.js --out-file assets/dist/js/script.js --source-maps --presets=es2015,react

```
		[235] => stdClass Object (
			[is_new] => 1
			[num_followers] => 2561
			[iframe_embed] => <iframe src='https://website.com/affiliates/in/?tour=Jrvi&amp;campaign=KZ7tX&amp;track=embed&amp;room=missi__girl&amp;bgcolor=white' height=528 width=850 style='border: none;'></iframe>
			[display_name] => ♥--- Lizeth♥
			[tags] => Array (
					[0] => bigtits
					[1] => hot
					[2] => bigboobs
					[3] => latina
					[4] => sexy
					[5] => new
				)
			[recorded] => false
			[iframe_embed_revshare] => <iframe src='https://website.com/affiliates/in/?tour=9oGW&amp;campaign=KZ7tX&amp;track=embed&amp;room=missi__girl&amp;bgcolor=white' height=528 width=850 style='border: none;'></iframe>
			[chat_room_url] => https://website.com/affiliates/in/?tour=yiMH&campaign=KZ7tX&track=default&room=missi__girl
			[location] => Bogota D.C., Colombia
			[block_from_states] =>
			[chat_room_url_revshare] => https://website.com/affiliates/in/?tour=LQps&campaign=KZ7tX&track=default&room=missi__girl
			[username] => missi__girl
			[spoken_languages] => español, ingles.
			[image_url_360x270] => https://roomimg.stream.highwebmedia.com/ri/missi__girl.jpg
			[current_show] => private
			[birthday] => 1994-08-21
			[is_hd] =>
			[block_from_countries] =>
			[seconds_online] => 30473
			[gender] => f
			[age] => 22
			[num_users] => 78
			[image_url] => \*https://roomimg.stream.highwebmedia.com/ri/missi__girl.jpg\*
			[room_subject] => subject or tagline [ # tokens remaining]
	)
```
