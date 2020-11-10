const ws = require("nodejs-websocket");

let webSocket = ws.createServer(function(client){
    console.log("client comming");

    client.on("text",function(result){
        console.log("receive message",result);
    });

    client.on("close",function(result){
        console.log("on close",result);
    });

    client.on("error",function(result){
        console.log("on error",result);
    });


})

webSocket.listen(3000);