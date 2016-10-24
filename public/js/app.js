var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room') || 'Public';
var socket = io();

console.log(name + ' - ' + room);

socket.on('connect', function () {
	console.log('Connected to socket.io server!');
});

socket.on('message', function(message) {
	var momentTimestamp = moment.utc(message.timestamp);
	console.log('Got this message: ');
	console.log(message.text);

	var $messages = jQuery('.messages');
	$messages.append( '<p><strong>' + message.sender + ' (' + momentTimestamp.local().format('h:mm a') + ') : </strong>' + message.text + '</p>');
});

// handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function(event) {
	event.preventDefault(); // not submitting in old fashion way, to handle the form on your own
	var $message = $form.find('input[name=message]');
	socket.emit('message', {
		text: $message.val(),
		sender: name
	});

	$message.val('');

});
