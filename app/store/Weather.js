Ext.define('MyApp.store.Weather', {
    extend: 'Ext.data.Store',

    config: {
        model: 'MyApp.model.Weather',

        //autoLoad: true,
        pageSize: 10,

        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json'
            }
        }
    }
});


/*
 //Ext.StoreMgr.get('MyJsonPStore')
 */
