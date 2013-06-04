//
// Devuelve el control OverviewMap
//
getOverviewControl = function() {
    
    var capaOverview = new OpenLayers.Layer.WMS(
        "IGN",
        "http://wms.ign.gob.ar/geoserver/wms?",
        {
          layers: "SIGN" //"sig250:lim,sig250:jad"
        },{
          buffer: 0,
          ratio: 1,
          singleTile: true
        }
    );
    /*gsat = new OpenLayers.Layer.Google("Google Imagery", {
        type: google.maps.MapTypeId.SATELLITE,
        numZoomLevels: 22,
        transitionEffect: "resize"
    });*/

    var mapOptions = {
        //maxExtent: new OpenLayers.Bounds(-65, -27.5, -55, -22),
        projection: new OpenLayers.Projection("EPSG:3857")
        //projection: new OpenLayers.Projection("EPSG:900913"),
        //units: "degrees"
    };

    var controlOptions = {
        mapOptions: mapOptions,
        maximizeTitle: 'Mostrar mapa de referencia',
        minimizeTitle: 'Ocultar mapa de referencia',
        layers: [capaOverview]
    };

    var overview = new OpenLayers.Control.OverviewMap(controlOptions);
    
    return overview;
};

/*
* Decimal to DMS conversion
*/
convertDMS = function(coordinate) {
  var coords;

  abscoordinate = Math.abs(coordinate);
  coordinatedegrees = Math.floor(abscoordinate);

  coordinateminutes = (abscoordinate - coordinatedegrees)/(1/60);
  tempcoordinateminutes = coordinateminutes;
  coordinateminutes = Math.floor(coordinateminutes);
  coordinateseconds = (tempcoordinateminutes - coordinateminutes)/(1/60);
  coordinateseconds =  Math.round(coordinateseconds*10);
  coordinateseconds /= 10;
  coordinateseconds = Math.floor(coordinateseconds);

  if( coordinatedegrees < 10 )
    coordinatedegrees = "0" + coordinatedegrees;

  if( coordinateminutes < 10 )
    coordinateminutes = "0" + coordinateminutes;

  if( coordinateseconds < 10 )
    coordinateseconds = "0" + coordinateseconds;

  coords = (coordinate < 0 ? "-" : "") + coordinatedegrees + "º";
  coords += coordinateminutes + "'";
  coords += coordinateseconds + "''";

  return coords;
};