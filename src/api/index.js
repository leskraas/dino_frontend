// api/index.js
var socket = new WebSocket("ws://localhost:8080/ws");

let connect = cb => {
  console.log("Attempting Connection...");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = msg => {
    console.log("====================================");
    let temp = JSON.parse(msg.data);
    if (temp.data.type === "verify") {
      cb(temp.data.content);
    }
    // console.log(temp.type);
    // console.log(temp.body);
    console.log(temp.data.type);
    // console.log(temp.data.content);
    console.log("====================================");
  };

  socket.onclose = event => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = error => {
    console.log("Socket Error: ", error);
  };
};

let sendMsg = (type, msg) => {
  // console.log("sending msg: ", msg);
  // let test = '{ "type":"John" , "content":"Doe" }';
  let test = { type: type, content: msg };
  test = JSON.stringify(test);
  console.log("sending msg: ", test);
  socket.send(test);
};

export { connect, sendMsg };
