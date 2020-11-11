cc.Class({
    extends: cc.Component,

    properties: {
        mainNodePrefab: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let mainNodeLayer = cc.instantiate(this.mainNodePrefab);
        mainNodeLayer.parent = this.node;
    },

    start () {

    },

    // update (dt) {},
});
