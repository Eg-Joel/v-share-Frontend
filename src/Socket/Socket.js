import io from 'socket.io-client';
const socket = io('https://v-share.fun', {
    transports: ['websocket', 'polling', 'flashsocket'],
  });

export default socket;