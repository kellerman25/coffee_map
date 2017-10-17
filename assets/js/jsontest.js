var mymap = L.map('mapid',{scrollWheelZoom:false}).setView([52.1579909,4.4910688], 10);





// load GeoJSON from an external file
$.getJSON("assets/geojson/coffee.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(mymap);
});


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    //check out mapbox.satellite
    accessToken: 'pk.eyJ1Ijoia2VsbGVybWFuMjUiLCJhIjoiY2o4aHVyY3NkMHRhMzMzcXRwZnRlc3JrbiJ9.Oxpb_odwdYhFOH_644heIA'
}).addTo(mymap);