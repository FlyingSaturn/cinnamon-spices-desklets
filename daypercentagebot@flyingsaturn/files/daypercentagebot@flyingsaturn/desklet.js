const Desklet = imports.ui.desklet;
const St = imports.gi.St;

function MyDesklet(metadata, instance_id) {
    this._init(metadata, instance_id);
}

function main(metadata, instance_id) {
    return new MyDesklet(metadata, instance_id);
}

MyDesklet.prototype = {
    __proto__: Desklet.Desklet.prototype,

    _init: function(metadata, instance_id) {
    },

   
};


