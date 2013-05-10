Ext.define('MyApp.store.Blog', {
    extend: 'Ext.data.Store',

    config: {
        fields: ['title', 'link', 'author', 'contentSnippet', 'content'],
        autoLoad: true,
        pageSize: 10,

        proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        }
    }
});