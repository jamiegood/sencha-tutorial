Ext.define('MyApp.view.Home', {
    extend: 'Ext.tab.Panel',
    xtype: 'home',

    requires: [
        'MyApp.view.Image',
        'Ext.data.proxy.JsonP',
        'MyApp.store.Weather'
    ],

    config: {
        fullscreen: true,
        tabBarPosition: 'top',
        defaults: {
            styleHtmlContent: true
        },
				items: 
				[
        	{
						xtype: 'weather'
       		},
          {
						xtype: 'about'
  				},
  				{
      			xtype: 'imagex'
    			}
        ]
    }
});
