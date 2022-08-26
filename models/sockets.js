class Sockets {

    constructor (io) {
        this.io = io;
        this.socketsEvents();
    }
    socketsEvents() {
        // ON connection
        this.io.on('connection', ( socket ) => {
            console.log('cliente conectado',  socket.id);
            // EVENTO ESCUCHA mensaje-to-server
            socket.on('mensaje-to-server', (data) => {
                console.log(data);
                this.io.emit('mensaje-from-server', data);
            });
        });
    }
}
module.exports = Sockets;