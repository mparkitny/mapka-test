Ext.define('MAP.controller.Map', {
    extend: 'Ext.app.Controller',

    views: [
        'MainView'
    ],

    requires: [
      'MAP.view.MapPanel',
      'MAP.view.LayersList',
    ],


    init: function() {
        this.control({
          '#mapPanel': {
            boxready: function(){
              settings = Ext.create(
                'MAP.model.SettingsModel',{
                  zoom: 9,
                  lon: 19,
                  lat: 50.3
                });
              this.CreateMap(settings);
            }
          },
          'div': {
            close: function() {Ext.Msg.alert('1',map.center);}
          },
          '#checkbox1': {
            change: function(){
              map.getLayersByName('OSM')[0].setVisibility(!map.getLayersByName('OSM')[0].getVisibility());
            }
          },
          '#save': {
            click: function(){
              settings.save();
              Ext.Msg.alert('1',''+settings.get('lon'));
            }
          }
        });
    },

    CreateMap: function(tmpSettings){
      map = new OpenLayers.Map('map', {
              layers: [
                  new OpenLayers.Layer.OSM('OSM'),

              ],
              controls: [
                  new OpenLayers.Control.PanZoomBar(),
                  new OpenLayers.Control.ScaleLine(),
                  new OpenLayers.Control.MousePosition(),
                  new OpenLayers.Control.KeyboardDefaults(),
                  new OpenLayers.Control.Navigation(),
              ],
              center: new OpenLayers.LonLat(settings.get('lon'), settings.get('lat')).transform('EPSG:4326', 'EPSG:3857'),
              zoom: settings.get('zoom'),
          });
    },


});
