//comando para erstablecer la conexcion

var socket = io();

var label = $('#lblNuevoTicket');


socket.on('connect', function() { //para conectarme al servidor
    console.log('conectado al servidor')
});

socket.on('disconnect', function() { //para desconectarme del servidor
    console.log('desconectado del servidor')
});


socket.on('estadoActual', function(resp) {

    console.log(resp);
    label.text(resp.actual);
});



$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });
});