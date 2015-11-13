Ext.application({
    name: 'MAP',

    appFolder: 'app',

    controllers: [
        'Map'
    ],

    /*views: [
        'LayersList',
        'MapPanel'
    ],*/

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'mainView'
                }
            ]
        });
    },

    /*onReady: [ function(){
      Ext.Msg.alert('uyt','jhg');
    }
    ]*/
});
