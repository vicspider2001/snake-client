const net = require("net");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541,
  });

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
      { command: "Name: VIC", delay: 100 },
      // { command: "Move: up", delay: 200 },
      // { command: "Move: down", delay: 300 },
      // { command: "Move: left", delay: 400 },
      // { command: "Move: right", delay: 500 },
    ];

    // Loop through commands and set timeouts
    commands.forEach(({ command, delay }) => {
      setInterval(() => {
        conn.write(command);
      }, delay);
    });
  });

  return conn;
};

console.log("Connecting ...");
module.exports = connect;
