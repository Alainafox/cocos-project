

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

 

    onLoad () {
        let ws = new WebSocket("ws://localhost:3000")

        ws.onopen = function(result){
            console.log("ws open",result);
        };

        ws.onmessage = function(result){
            console.log("ws message",result);
        };

        ws.onclose = function(result){
            console.log("ws close",result);
        };

        ws.onerror = function(result){
            console.log("ws error",result);
        };

    },

    start () {

    },

    // update (dt) {},
});
