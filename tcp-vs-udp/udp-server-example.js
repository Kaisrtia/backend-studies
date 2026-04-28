const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log(`Received message: ${msg} from ${rinfo.address}:${rinfo.port}`);
  const response = Buffer.from(`Echo: ${msg}`);
  server.send(response, rinfo.port, rinfo.address, (err) => {
    if (err) {
      console.error('Error sending response:', err);
    } else {
      console.log('Response sent');
    }
  });
});

server.bind(3000, () => {
  console.log('UDP server listening on port 3000');
});