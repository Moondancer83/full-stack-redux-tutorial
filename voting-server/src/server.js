import Server from 'socket.io';

export default function startServer() {
    new Server().attach(8090);
}