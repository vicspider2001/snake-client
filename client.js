const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log('Server msg: ', data)
  })

  return conn;
};

console.log("Connecting ...");
module.exports = connect;
