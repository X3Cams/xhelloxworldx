'use strict';

$(document).ready(function () {
	$('#image_modal').on('show.bs.modal', function (event) {
		var anchor = $(event.relatedTarget); // Button that triggered the modal
		var camimg = anchor.data('img'); // Extract info from data-* attributes
		var username = anchor.data('username');
		var displayname = anchor.data('displayname');
		var birthday = anchor.data('birthday');
		var modelage = anchor.data('age');
		var modelgender = anchor.data('gender');
		var roomsubject = anchor.data('subject');
		var duration = anchor.data('duration');
		var hdroom = anchor.data('hd');
		var language = anchor.data('lang');
		var show = anchor.data('show');
		var video = anchor.data('video');

		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Support for AJAX loaded modal window.
		// Focuses on first input textbox after it loads the window.

		// $('[data-toggle="modal"]').click(function(e) {
		// 	e.preventDefault();
		// 	var url = $(this).attr('href');
		// 	if (url.indexOf('#') == 0) {
		// 		$(url).modal('open');
		// 	} else {
		// 		$.get(url, function(data) {
		// 			$('<div class="modal hide fade">' + data + '</div>').modal();
		// 		}).success(function() { $('input:text:visible:first').focus(); });
		// 	}
		// });
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this);
		if (displayname != '') {
			modal.find('.modal-title').text(displayname + ' aka ' + username);
		} else {
			modal.find('.modal-title').text(username);
		}
		//https://edge16.stream.highwebmedia.com/live-edge/littlesonia-sd-d75c164244292641ee2f2c12db1cb01ac7bc3b96eee0863a75e71003fa139d0d_fast_aac/playlist.m3u8
		//modal.find('.model-img').html('<img src="'+camimg+'" alt="'+username+' '+displayname+'">')
		modal.find('.model-video').html('<iframe src="https://chaturbate.com/fullvideo/?b=' + username + '&bgcolor=transparent&disable_sound=1&embed_video_only=1&target=_parent" height=600 width=800 style="border: none;" tabindex="-1"></iframe>');
		//modal.find('.model-video').html('<iframe src="https://chaturbate.com/affiliates/in/?tour=Jrvi&campaign=KZ7tX&track=embed&room='+username+'tour=Jrvi&campaign=KZ7tX"></iframe>')
		//modal.find('iframe').attr("src", video)
		modal.find('.model-username').html('<strong>Username:</strong> ' + username);
		modal.find('.model-displayname').html('<strong>Name:</strong> ' + displayname);
		modal.find('.model-age').html('<strong>Age &amp; Birthday:</strong> ' + modelage + ', ' + birthday);
		modal.find('.model-gender').html('<strong>Gender:</strong> ' + modelgender);
		modal.find('.model-subject').html('<strong>Room Subject:</strong> ' + roomsubject);
		modal.find('.model-duration').html('<strong>Most Recent/Current Show: </strong> ' + duration);
		modal.find('.model-hd').html('<strong>HD Cam:</strong> ' + hdroom);
		modal.find('.model-lang').html('<strong>Languages:</strong> ' + language);
		modal.find('.model-showp').html('<strong>Show Status:</strong> ' + show);
	});
});