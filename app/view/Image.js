Ext.define('MyApp.view.Image', {
    extend: 'Ext.Img',
    xtype: 'imagex',
    config: {
        iconCls: 'user',
        title: 'Orion Nebula',
        description: 'The Orion Nebula is rather pretty',
        src: 'http://apod.nasa.gov/apod/image/1202/oriondeep_andreo_960.jpg',
        fullscreen: false
    },

    //sets up our tap event listener
    initialize: function() {
        this.callParent(arguments);

        this.element.on('tap', this.onTap, this);
    },

    //this function is called whenever you tap on the image
    onTap: function() {
        Ext.Msg.alert(this.getTitle(), this.getDescription());
    }
});