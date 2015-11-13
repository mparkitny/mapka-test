Ext.define('MAP.view.MainView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainView',

    items: [

        {
            xtype: 'mapPanel',
            title: 'Map Panel',

            width: 960,
            height: 600,
        },
        {
            xtype: 'layersList',
            title: 'Layers List',
            width: '20%',
            height: 600,
        },
    ],

    title: 'Main Panel',
    width: '90%'
});
