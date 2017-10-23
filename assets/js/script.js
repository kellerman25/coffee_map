var text = '{ "coffeeplaces" : [' +
'{ "Name":"Van de Leur" , "Adress":"Breestraat 117", "lng":52.1583791, "lat":4.4897115, "visited":"Yes", "recom":"Yes"},' +
'{ "Name":"Chummy Coffee" , "Adress":"Breestraat 97", "lng":52.1578795, "lat":4.4904943, "visited":"Yes", "recom":"Yes"},' +
'{ "Name":"Borgman \& Borgman" , "Adress":"Nieuwe Rijn 41" , "lng":52.1573394, "lat":4.4931078, "visited":"Yes", "recom":"Yes"},' +
'{ "Name":"Lebkov \& Sons" , "Adress":"Bargelaan 8" , "lng":52.1669815, "lat":4.481598, "visited":"Yes", "recom":"Yes"},' +
'{ "Name":"Black \& Bloom" , "Adress":"Oude Kijk in Het Jatstraat 32" , "lng": 53.219385, "lat":6.561620, "visited":"No", "recom":"Yes"},' +
'{ "Name":"Kaafi" , "Adress":"Prinsestraat 25" , "lng": 52.0787054, "lat":4.3061901, "visited":"Yes", "recom":"Yes"},' +
'{ "Name":"Bleyenberg" , "Adress":"Grote Markt 10 Bike-thru on weekends", "lng":52.0751727, "lat":4.3087, "visited":"No", "recom":"?"},' +
'{ "Name":"Capriole Cafe" , "Adress":"Fokkerkade 18 They had open roasting event!", "lng":52.0650586, "lat":4.3371829, "visited":"No", "recom":"?"},' +
'{ "Name":"Koffiebranderij BOON" , "Adress":"Pirnsestraat 114", "lng":52.0798094, "lat":4.3041390, "visited":"Yes", "recom":"Yes"},' +
'{ "Name":"Lola Bikes \& Coffee" , "Adress":"Noordeinde 91", "lng":52.0826079, "lat":4.3056719, "visited":"Yes", "recom":"No"},' +
'{ "Name":"Hop \& Stork" , "Adress":"Passage 82", "lng":52.0783886, "lat": 4.3119224, "visited":"No", "recom":"?"},' +
'{ "Name":"Kukutu Cafe" , "Adress":"Nowowiejska 27" , "lng":50.8987345, "lat":15.7476963, "visited":"No", "recom":"Yes", "city": "Jelenia Góra"},' +
'{ "Name":"Relaks Kawiarnia" , "Adress":"Puławska 48" , "lng":52.2026575, "lat":21.0215929, "visited":"No", "recom":"Yes", "city": "Warszawa"},' +
'{ "Name":"Relax Cafe Bar" , "Adress":"Złota 8a" , "lng":52.2331342, "lat":21.0108536, "visited":"Yes", "recom":"Yes", "city": "Warszawa"},' +
'{ "Name":"Kona Coast Cafe" , "Adress":"Chełmińska 18" , "lng":53.011839, "lat":18.6040242, "visited":"Yes", "recom":"Yes", "city": "Toruń"},' +
'{ "Name":"Space Coffee" , "Adress":"Gang Loncang No. 3" , "lng":-7.7659652, "lat":110.3605624, "visited":"No", "recom":"?", "city": "Sleman", "country":"Indonesia"},' +
'{ "Name":"Clandestino Roasters" , "Adress":"2/59 Rene St" , "lng":-26.417794, "lat":153.0435583, "visited":"No", "recom":"?", "city": "Noosaville", "country":"Australia"},' +
'{ "Name":"Forge Roasters" , "Adress":"Don Rd" , "lng":53.3991735, "lat":-1.4340637, "visited":"No", "recom":"?", "city": "Sheffield", "country":"England"},' +
'{ "Name":"Original Green Roasters" , "Adress":"Rancagua 040", "lng":-33.4416114, "lat":-70.6331877, "visited":"Yes", "recom":"Yes", "city": "Santiago", "country":"Chile"},' +
'{ "Name":"Java Dancer Coffee 1" , "Adress":"Jl. Jakarta No.59", "lng":-7.9656173, "lat":112.6205209, "visited":"No", "recom":"No", "city": "Malang", "country":"Indonesia"},' +
'{ "Name":"Java Dancer Coffee 2" , "Adress":"Jl. Kahuripan No.12", "lng":-7.9767995, "lat":112.6329053, "visited":"No", "recom":"No", "city": "Malang", "country":"Indonesia"},' +
'{ "Name":"Java Dancer Coffee 3" , "Adress":"Jl. Veteran No.2, Malang Town Square P9", "lng":-7.957176, "lat":112.6183636, "visited":"No", "recom":"No", "city": "Malang", "country":"Indonesia"},' +
'{ "Name":"Coffee Pirates" , "Adress":"Spitalglasse 17", "lng":48.2173687, "lat":16.3510373, "visited":"No", "recom":"?", "city": "Vienna", "country":"Austria"},' +
'{ "Name":"Jonas Reindl Coffee" , "Adress":" Währinger Str. 2-4", "lng":48.214957, "lat":16.3616055, "visited":"No", "recom":"?", "city": "Vienna", "country":"Austria"},' +
'{ "Name":"People on Caffeine" , "Adress":" Schlösselgasse 21, closed on weekends!", "lng":48.2145818, "lat":16.3528023, "visited":"No", "recom":"?", "city": "Vienna", "country":"Austria"},' +
'{ "Name":"Filtro Koffie Bar" , "Adress":"Papestraat 11" , "lng":52.07918, "lat":4.30812, "visited":"Yes", "recom":"Yes"} ]}'
;



var roasters = '{ "roasters": [' +
'{ "Name":"Jones Brothers" , "Adress":"Sint Willibrordusstraat 54 HS" , "lng":52.354149, "lat":4.9007097, "tried":"No", "visited":"No", "recom":"?", "city": "Amsterdam", "country":"Netherlands"},' +
' "Name": "Java Dancer Coffee", "Country":"Indonesia", "tried": "No"' +
' "Name": "Ona Coffee", "Country":"Australia", "tried": "No"' +
' "Name": "Forge Roasters", "Country":"England", "tried": "No"' +
' "Name": "Clandestino Roasters", "Country":"Australia", "tried": "No"' +
' "Name": "Original Green Roasters", "Country":"Chile", "tried": "Yes"' +
' "Name": "Bless Coffee Roasters", "Country":"Australia", "tried": "No"' +
' "Name": "Space Coffee", "Country":"Indonesia", "tried": "No"' +
' "Name":"Phil \& Seb" , "Country":"Canada", "tried": "Yes" ]}'





var obj = JSON.parse(text);

for (i in obj.coffeeplaces) { 
	document.getElementById("demo").innerHTML = obj.coffeeplaces[0].lng;

}

//creates a map variable, assigns it a new object (L.map) and passes it the id ('mapid') of the div element (specified
//in html
//var mymap = L.map('mapid').setView([52.1579909,4.4910688], 13);

//we can also easily disable the option of scrolling the map to zoom
var mymap = L.map('mapid',{scrollWheelZoom:true}).setView([52.1579909,4.4910688], 7);

// we can remove the centering options from the L.map constructor:
//var mymap = L.map('mapid');
//well apparently we can't, it was about removing the keywords and putting it in a shorter form as above.



//creating a custom popup window, its associated with css file 
//see .custom .leaflet-popup-tip
var customPopup = [];
for (var x in obj.coffeeplaces) {customPopup[x] = "<b>"+obj.coffeeplaces[x].Name +"</b><br>"+obj.coffeeplaces[x].Adress;}
var customOptions = 
	{
		'maxWidth': '200',
		'className': 'custom' //this is crucial so css file knows what to refer to!!! with .custom
	}


var IconYes = L.icon({
    iconUrl: 'icon3.png',
    iconSize: [20, 20],
    iconAnchor: [8,8],
    popupAnchor: [0,0],
//    shadowUrl: 'my-icon-shadow.png',
//    shadowSize: [68, 95],
//    shadowAnchor: [22, 94]
});

var IconNotRecom = L.icon({
    iconUrl: 'icon4.png',
    iconSize: [20, 20],
    iconAnchor: [8,8],
    popupAnchor: [0,0],
//    shadowUrl: 'my-icon-shadow.png',
//    shadowSize: [68, 95],
//    shadowAnchor: [22, 94]
});

var IconNo = L.icon({
    iconUrl: 'icon2.png',
    iconSize: [20, 20],
    iconAnchor: [8,8],
    popupAnchor: [0,0],
//    shadowUrl: 'my-icon-shadow.png',
//    shadowSize: [68, 95],
//    shadowAnchor: [22, 94]
});




var markers = [];
for (var x in obj.coffeeplaces) { 
    if (obj.coffeeplaces[x].visited == "Yes") {
        if (obj.coffeeplaces[x].recom == "Yes") {
            var IconName = IconYes
            var cOpactiy = 0.9
        } else {
            var IconName = IconNotRecom
            var cOpactiy = 0.4
        }
    } else if (obj.coffeeplaces[x].visited == "No")
    {
        var IconName = IconNo
        var cOpactiy = 0.9
    }


    markers[x] =  L.marker([obj.coffeeplaces[x].lng,obj.coffeeplaces[x].lat],
            {draggable: false,        // Make the icon dragable
            icon: IconName,
          //  title: 'Hover Text',     // Add a title
            opacity: cOpactiy}).addTo(mymap)         // Adjust the opacity).addTo(mymap);
    markers[x].bindPopup(customPopup[x],customOptions);
};

//note that adding the .openPopup() immediately opens the popup

//bindPopup is kind of a shortcut, you can also create a label as a layer
//var popup = L.popup()
//    .setLatLng([52.1669815,4.481594])
 //   .setContent("I am a standalone popup.")
 //   .openOn(mymap);
//you can note that its different than .addTo(mymap)
//options openOn automatically closes the previous popup

//e is a click event, that we can subscribe to with a function
//here we basically create javascript alert with latlng after clicking
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
};
//mymap.on('click', onMapClick);

//here we will create a popup with a click
var popup = L.popup();







function onMapClick(e) {
   popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
       .openOn(mymap);
}
mymap.on('click', onMapClick);

// creating a new L.tileLayer object, specifying a particular set of tiles to be loaded into the map container and passes in an
// 'attribution' option
// .addTo option adds the layer to created map - we are refering to earlier created mymap variable
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    //check out mapbox.satellite
    accessToken: 'pk.eyJ1Ijoia2VsbGVybWFuMjUiLCJhIjoiY2o4aHVyY3NkMHRhMzMzcXRwZnRlc3JrbiJ9.Oxpb_odwdYhFOH_644heIA'
}).addTo(mymap);

