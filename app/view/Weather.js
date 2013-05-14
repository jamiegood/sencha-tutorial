Ext.define('MyApp.view.Weather', {

    extend: 'Ext.List',
    xtype: 'weather',

    config: {
        iconCls: 'home',
        title: 'Weather',
        store: 'Weather',

        emptyText: '<p class="no-searches">No weather report found</p>',

        itemTpl: Ext.create('Ext.XTemplate',
            '<img src="{profile_image_url}" />',
            '<div class="tweet">',
            '<h2>{name}, {[this.formatDetails(values.sys.country)]}</h2>',
            '<p>Temperature: {[this.formatDetails(values.main.temp)]}</p>',
            '</div>',
            {
                formatDetails: function(obj) {
                    //console.log(obj);
                    return obj;
                }
            }
        )

    },
    detailCard: {
        xtype: 'panel',
        scrollable: true,
        styleHtmlContent: true
    },

    initialize: function() {

    this.callParent();

    this.getStore().load({
        url: MyApp.app.weatherAPI + MyApp.app.defaultCountry
    });
}
});
