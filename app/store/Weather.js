Ext.define('MyApp.store.Weather', {
    extend: 'Ext.data.Store',

    config: {
        fields: ['name', 'main', 'wind'],
        autoLoad: true,
        pageSize: 10,

        proxy: {
            type: 'jsonp',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=Dublin,ie',
            reader: {
                type: 'json'
            }
        }
    }
});