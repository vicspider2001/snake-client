const { UP, LEFT, RIGHT, DOWN } = require("./constants");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput);
  
  return stdin;
};

const handleUserInput = function(usrInput) {
  if (usrInput === '\u0003') {
    process.exit();
  } else if (usrInput === 'w') {
    connection.write(UP);
  } else if (usrInput === 'a') {
    connection.write(LEFT);
  } else if (usrInput === 's') {
    connection.write(DOWN);
  } else if (usrInput === 'd') {
    connection.write(RIGHT);
  } else if(usrInput === 'z') {
    connection.write("Say: Hey Guys!")
  }else if(usrInput === 'x') {
    connection.write('Say: Coding is tough and fun')
  }
  
};

module.exports = setupInput;