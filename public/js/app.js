var socket = io();

socket.on('connect', function () {
	console.log('Connected to socket.io server!');
});

socket.on('message', function(message) {
	console.log('Got this message: ');
	console.log(message.text);
});

// handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function(event) {
	event.preventDefault(); // not submitting in old fashion way, to handle the form on your own
	var $message = $form.find('input[name=message]');
	socket.emit('message', {
		text: $message.val()
	});

	$message.val('');

});
