Ext.define('MAP.view.LayersList', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layersList',

//    title: 'Layers List',

    id: 'layersList',

    items: [
        {
            xtype: 'checkboxgroup',
            fieldLabel: 'Layers',
            columns: 1,
            //defaultType: 'checkboxfield',
            items: [
                {
                    boxLabel: 'b1',
                    name: 'n1',
                    id: 'checkbox1'
                },
                {
                    boxLabel: 'b2',
                    name: 'n2',
                    id: 'checkbox2'
                }
            ]
        },
        {
          xtype: 'button',
          id: 'save',
        },
    ],

});
