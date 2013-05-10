Ext.define('MyApp.view.About', {

    extend: 'Ext.List',
    xtype: 'about',

    config: {
        iconCls: 'home',
        title: 'About',
        store: 'Blog',
        itemTpl: [ '{title}' ]
    },

    initialize: function() {
        this.callParent();
    }
});
