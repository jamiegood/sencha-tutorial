Ext.define('MyApp.view.About', {

    extend: 'Ext.List',
    xtype: 'about',

    config: {
        iconCls: 'home',
        title: 'About',
        store: 'Blog',
        itemTpl: [ '{title}' ]

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
