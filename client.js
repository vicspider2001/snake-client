const {IP, PORT} = require('./constants');
const net = require("net");

// Establishes a connection with the game server
const connect = function() {
  console.log(`Connecting to ${IP}:${PORT}...`);
  const conn = net.createConnection({
    host : IP, // IP address here,
    port: PORT,
  },() => {console.log("Connected to server")});
  

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Event handler for incoming data
  conn.on('data', (data) => {
    console.log('Server msg:', data);
  });

  // Event handler for successful connection
  conn.on('connect', () => {
    // Commands with different delays
    const commands = [
      { command: "Successfully connected to game server", delay: 50 },
      { command: 'Name: VIC', delay: 100 }
    ];

    // Loop through commands and set timeouts
    commands.forEach(({ command, delay }) => {
      setTimeout(() => {
        conn.write(command);
      }, delay);
    });
  });
  

  return conn;
};

console.log("Connecting ...");

module.exports = connect;
