Ext.define('MAP.model.SettingsModel', {
    extend: 'Ext.data.Model',

    fields: [
      {name: 'zoom', type: 'number'},
      {name: 'lon', type: 'number'},
      {name: 'lat', type: 'number'},
    ],

    proxy: {
      type: 'rest',
      url: '/data',
      reader: {
        type: 'json',

      },
    },


  });
