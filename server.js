const app = require('express')(); // Ó const express = require('express'), app = expres()
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log("Conexion Socket io Exitosa");

    socket.on('pedidos', (data) => {
        console.log('mensaje recibido', data)
    });
    
});

http.listen(3000, () => {
    console.log('listening: 3000');
});