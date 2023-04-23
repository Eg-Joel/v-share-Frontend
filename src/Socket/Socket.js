import io from 'socket.io-client';
const socket = io('wss://localhost:8900');

export default socket;