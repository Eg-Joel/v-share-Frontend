import io from 'socket.io-client';
const socket = io('wss://v-share.onrender.com');

export default socket;