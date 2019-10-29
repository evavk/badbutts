console.log('YAY it loaded');


if ($('#map').length){
// Map section

	mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhciIsImEiOiJjazFwZ3ZqZ24wOXlkM2NtdTk1ZDg2dDRpIn0.MLFm1hFFjqz5mJpNy3AvWg';
	
	var map = new mapboxgl.Map({
		container: 'map', // container id
		style: 'mapbox://styles/evar/ck21kmpkw56i61ckif2z156zh', //hosted style id
		center: [151.252, -33.826], // starting position
		zoom: 14.0 // starting zoom
	
	});


map.on('load', function() {
 
 // Custom marker here
map.loadImage('https://i.ibb.co/zN6RPbX/maps-and-flags.png', function(error, image) {
if (error) throw error;
map.addImage('pin', image);

	// Add a layer showing the places.
	map.addLayer({
		"id": "places",
		"type": "symbol",

		"source": {
			"type": "geojson",
			"data": {
				"type": "FeatureCollection",
				"features": [{

					"type": "Feature",
					"properties": {
						"description": 
						"<h4>Clean Up #1</h4><p><i>19th October, 2019 - 12 people</i> <br><br> Items found: <ul class='popuplist'><li>161 cigarette butts </li> <li> 360+ soft plastics </li> <li> 58 metal bottle caps </li><li> 17 plastic lids </li> </ul> <a href='#'>read the comprehensive list</a> <br><a href='https://www.facebook.com/photo.php?fbid=10162677748735553&set=pcb.2546814802074218&type=3&theater&ifg=1'>see our photos </a></p>",
					},

					"geometry": {
						"type": "Point",
						"coordinates": [151.2540407, -33.828763]
					}

				}, {
					"type": "Feature",
					"properties": {
						"description": 
						"<h4>Clean Up #2</h4><p><i>27th October, 2019 - 16 people</i> <br><br>Items found: <ul class='popuplist'><li>202 cigarette butts </li> <li> 12 straws </li> <li> 36 metal bottle caps </li><li>12 broken glass</li></ul><a href='#'>read the comprehensive list</a> <br><a href='https://www.facebook.com/photo.php?fbid=10162677748735553&set=pcb.2546814802074218&type=3&theater&ifg=1'>see our photos </a></p>",
					},
					"geometry": {
					"type": "Point",
					"coordinates": [151.252861, -33.826962]
					}
				
				}, {
					"type": "Feature",
					"properties": {
						"description": 
						"<h4>Clean Up #3</h4><p><i>9th November, 2019 - 5 people</i> <br><br>Items found: <ul class='popuplist'><li>86 cigarette butts </li> <li> 308 soft plastics</li><li> 2 straws </li> <li> 11 metal bottle caps </li></ul><a href='#'>read the comprehensive list</a> <br><a href='https://www.facebook.com/photo.php?fbid=10162677748735553&set=pcb.2546814802074218&type=3&theater&ifg=1'>see our photos </a></p>",
					},
					"geometry": {
					"type": "Point",
					"coordinates": [151.25116500000001, -33.8241425]
					}

				}, {
					"type": "Feature",
					"properties": {
						"description": 
						"<h4>Clean Up #4</h4><p><i>8th January, 2020 - 15 people</i> <br><br>Items found: <ul class='popuplist'><li>385 cigarette butts </li> <li> 23 straws </li> <li> 67 metal bottle caps </li><li> 21 salt packets</li></li></ul><a href='#'>read the comprehensive list</a> <br><a href='https://www.facebook.com/photo.php?fbid=10162677748735553&set=pcb.2546814802074218&type=3&theater&ifg=1'>see our photos </a></p>",
					},
					"geometry": {
					"type": "Point",
					"coordinates": [151.251171, -33.823202]
					}


				}]
			}
		},

		"layout": {
			"icon-image": "pin",
			"icon-size": 0.26,
			"icon-allow-overlap": true,
		}

	});
});

map.scrollZoom.disable();

map.addControl(new mapboxgl.NavigationControl());

var popup = new mapboxgl.Popup({
	closeButton: true,
	closeOnClick: true
});


map.on('mouseenter', 'places', function(e) {
	map.getCanvas().style.cursor = 'pointer';


	var coordinates = e.features[0].geometry.coordinates.slice();
	var description = e.features[0].properties.description;


	while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
		coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
	}

	popup.setLngLat(coordinates)
		.setHTML(description)
		.addTo(map);
	});
 
 	map.on('mouseleave', 'places', function() {
		map.getCanvas().style.cursor = '';
	});


});

}


// Floaties section

if ($('.floaties').length){

var cigbutt = '../personal_project/img/singlebutt.png';

var floaties = document.querySelector('.floaties');

var rect = floaties.getBoundingClientRect();

var myTop = 0;
var myLeft = 0;
var myImages = ["../personal_project/img/singlebutt2.png", "../personal_project/img/singlebutt.png", "../personal_project/img/singlebutt3.png" ];

for( var i = 0; i < 120; i++ ) {
	myTop = Math.floor(Math.random() * (Math.floor(rect.height) - 100));
	myLeft = Math.floor(Math.random() * (Math.floor(rect.width) - 100));
	var randomImage = Math.floor(Math.random() * 3);
	console.log(randomImage);


floaties.innerHTML += '<img style="transform: rotate('+Math.floor(Math.random() * 200)+'deg); animation-delay:-'+(myTop / 100)+'s; left: '+myLeft+'px; top:'+myTop+'px " class="cigbutt" src=" '+myImages[randomImage]+' ">';
}

var cigbutts = document.querySelectorAll('.floaties .cigbutt');
cigbutts.forEach( function(e, i, a) {
  e.addEventListener('mouseover', function() {
    e.parentNode.removeChild(e);
  })
});

}


// Carousel section

if ($('.hero-carousel').length){

$('.hero-carousel').slick({ 
	autoplay      : false,
	autoplaySpeed : 3000,
	dots          : true, 
	prevArrow     : '<i class="fa fa-chevron-left"></i>',
	nextArrow     : '<i class="fa fa-chevron-right"></i>',
	infinite      : false,
	slidesToShow  : 2,
	slidesToScroll : 1,
});

}





