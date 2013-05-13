Ext.define('MyApp.view.Weather', {

    extend: 'Ext.List',
    xtype: 'weather',

    config: {
        iconCls: 'home',
        title: 'Weather',
        store: 'Weather',
        itemTpl: [ '{wind}' ]

    },
    detailCard: {
        xtype: 'panel',
        scrollable: true,
        styleHtmlContent: true
    },


    initialize: function() {
        this.callParent();
    }
});
