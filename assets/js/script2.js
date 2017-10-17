var mymap = L.map('mapid',{scrollWheelZoom:false}).setView([52.1579909,4.4910688], 13);

var cool= {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [4.3080054,52.0791515]
    }
};


var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};



L.geoJSON(cool, {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(mymap);


//var myLayer = L.geoJSON({style:myStyle}).addTo(mymap);
//myLayer.addData(geojsonFeature);

var myStyle = {
    "color": "#f0f0f0",
    "weight": 10,
    "opacity": 0.65
};

L.geoJSON(cool, {
    style: myStyle
}).addTo(mymap);




L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    //check out mapbox.satellite
    accessToken: 'pk.eyJ1Ijoia2VsbGVybWFuMjUiLCJhIjoiY2o4aHVyY3NkMHRhMzMzcXRwZnRlc3JrbiJ9.Oxpb_odwdYhFOH_644heIA'
}).addTo(mymap);



