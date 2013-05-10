/**
 * This screen is displayed once a user has logged in to Facebook and authorized our app.
 */
Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',

    config: {
        tabBarPosition: 'bottom',
        tabBar: {
            ui: 'gray'
        },

        items: [
            {
                xtype: 'nestedlist',
                title: 'Blog',
                iconCls: 'star',
                displayField: 'title',

                store: {
                    type: 'tree',

                    fields: [
                        'title', 'link', 'author', 'contentSnippet', 'content',
                        {name: 'leaf', defaultValue: true}
                    ],

                    root: {
                        leaf: false
                    },

                    proxy: {
                        type: 'jsonp',
                        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                        reader: {
                            type: 'json',
                            rootProperty: 'responseData.feed.entries'
                        }
                    }
                }
            }
        ]
    },

    initialize: function() {
        this.callParent();

        // Enable the Tap event on the profile picture in the toolbar, so we can show a logout button
        var meta = Ext.getCmp('signout');
        if (meta) {
            meta.element.on('tap', function(e) {
                meta.fireEvent('tap', meta, e);
            });
        }
    }
});


