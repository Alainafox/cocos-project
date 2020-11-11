cc.Class({
    extends: cc.Component,

    properties: {
        playerNodePrefab: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let ws = new WebSocket("ws://39.100.137.50:3000");

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

        let playerNode = cc.instantiate(this.playerNodePrefab);
        playerNode.parent = this.node;

        //console.log(playerNode.getComponent(cc.Widget));
        //let playerNodeWidget = playerNode.getComponent(cc.widget);
        //playerNodeWidget.top = 50;

    },

    start () {

    },

    onButtonClick(clickEvent,udata){
        console.log(udata);
    }

    //update (dt) {},
});
