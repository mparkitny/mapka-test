Ext.create('Ext.data.Store', {
    model: 'SettingsModel',

    proxy: {
      type: 'rest',
      url: 'settings',
      reader: {
        type: 'json',
      }
    },

    autoload: true,
  });
