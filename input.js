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
    connection.write("Move: up");
  } else if (usrInput === 'a') {
    connection.write("Move: left");
  } else if (usrInput === 's') {
    connection.write("Move: down");
  } else if (usrInput === 'd') {
    connection.write("Move: right");
  } else if(usrInput === 'z') {
    connection.write("Say: Hey Guys!")
  }else if(usrInput === 'x') {
    connection.write('Say: Coding is tough and fun')
  }
  
};

module.exports = setupInput;