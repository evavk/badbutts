console.log('YAY it loaded');


if ($('#map').length){
// Map section

	mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhciIsImEiOiJjazFwZ3ZqZ24wOXlkM2NtdTk1ZDg2dDRpIn0.MLFm1hFFjqz5mJpNy3AvWg';
	
	var map = new mapboxgl.Map({
		container: 'map', // container id
		style: 'mapbox://styles/evar/ck21kmpkw56i61ckif2z156zh', //hosted style id
		center: [151.252, -33.826], // starting position
		zoom: 14.5 // starting zoom
	
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
						"<h4>Clean Up #1</h4><p><i>9th November, 2019 - Rotunda Grass</i> <br><br><b>356 </b>cigarette butts<br><br>Top 3 items found: <ul class='popuplist'> <li> 48 soft plastics </li> <li> 23 metal bottle caps </li><li> 16 plastic lids </li> </ul></p>",
					},

					"geometry": {
						"type": "Point",
						"coordinates": [151.2510464, -33.8228665]
					}

				}, {
					"type": "Feature",
					"properties": {
						"description": 
						"<h4>Clean Up #2</h4><p><i>1st December, 2019 - Hunter Park</i> <br><br><b>126</b> cigarette butts<br><br>Top 3 items found: <ul class='popuplist'><li> 47 soft plastics </li> <li> 9 metal bottle caps </li><li>6 plastic cutlery</li></ul> <br><a href='https://www.facebook.com/groups/Responsiblerunnersbalmoral/permalink/2648097115279319/'>see our photos </a></p>",
					},
					"geometry": {
					"type": "Point",
					"coordinates": [151.2505623, -33.8247755]
					}
				
				}, {
					"type": "Feature",
					"properties": {
						"description": 
						"<h4>Clean Up #3</h4><p><i>7th December, 2019 - Corner of Raglan St & The Esplanade</i> <br><br><b>408</b> cigarette butts<br><br>Top 3 items found: <ul class='popuplist'> <li> 44 metal bottle caps</li><li> 14 straws </li> <li> 16 salt packets </li></ul><br><a href='https://www.facebook.com/groups/Responsiblerunnersbalmoral/permalink/2669426716479692/'>see our photos </a></p>",
					},
					"geometry": {
					"type": "Point",
					"coordinates": [151.2514561, -33.8264456]
					}

				}, {
					"type": "Feature",
					"properties": {
						"description": 
						"<h4>Clean Up #4</h4><p><i>22nd December, 2019 - Rocky Point Island</i> <br><br><b>233</b> cigarette butts<br><br>Top 3 items found: <ul class='popuplist'> <li> 53 plastic bottle caps </li> <li> 53 soft plastics </li><li> 25 hard plastics</li></li></ul></p>",
					},
					"geometry": {
					"type": "Point",
					"coordinates": [151.252371, -33.823200]
					}

				}, {
					"type": "Feature",
					"properties": {
						"description": 
						"<h4>Clean Up #5</h4><p><i>12th January, 2020 - The Esplanade</i> <br><br><b>302</b> cigarette butts<br><br> Top 3 items found: <ul class='popuplist'><li> 86 hard plastics </li> <li> 22 plastic bottle caps </li><li> 27 metal bottle caps</li></li></ul></p>",
					},
					"geometry": {
					"type": "Point",
					"coordinates": [151.2512634, -33.8252721]
					}


				}, {
					"type": "Feature",
					"properties": {
						"description": 
						"<h4>Clean Up #6</h4><p><i>27th January, 2020 - Public Dining Room to Balmoral Oval</i> <br><br><b>216</b> cigarette butts<br><br>Top 3 items found: <ul class='popuplist'><li> 75+ soft plastics </li> <li> 38 metal bottle caps </li><li> 14 plastic bottle caps</li></li></ul> <br><a href='https://www.facebook.com/groups/Responsiblerunnersbalmoral/permalink/2852011964887832/'>see our photos </a></p>",
					},
					"geometry": {
					"type": "Point",
					"coordinates": [151.2534363, -33.8281935]
					}



				}, {
					"type": "Feature",
					"properties": {
						"description": 
						"<h4>Clean Up #8</h4><p><i>23rd February, 2020 - Edwards Beach </i> <br><br><b>42</b> cigarette butts<br><br>Top 3 items found: <ul class='popuplist'><li> 88 styrofoam pieces</li> <li> 108 soft plastics </li><li> 13 plastic bottle caps</li></li></ul> <br><a href='https://www.facebook.com/groups/Responsiblerunnersbalmoral/permalink/2850207538401608/'>see our photos </a></p>",
					},
					"geometry": {
					"type": "Point",
					"coordinates": [151.251100, -33.821747]
					}


				}, {
					"type": "Feature",
					"properties": {
						"description": 
						"<h4>Clean Up #7</h4><p><i>22nd February, 2020 - Pinic Area (between Bathers Pavillion & Balmoral Beach Club) </i> <br><br><b>158</b> cigarette butts<br><br>Top 3 items found: <ul class='popuplist'><li> 55 soft plastics </li> <li> 27 metal bottle caps </li><li> 29 styrofoam pieces</li></li></ul> <br><a href='https://www.facebook.com/groups/Responsiblerunnersbalmoral/permalink/2850229368399425/'>see our photos </a></p>",
					},
					"geometry": {
					"type": "Point",
					"coordinates": [151.2506843, -33.8215796]
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
function addButts(buttsNumber) {
	var floaties = $('.floaties')[0];
	if (!floaties) {
		return;
	}

	var rect = floaties.getBoundingClientRect();
	var images = ["/img/singlebutt2.png", "/img/singlebutt.png", "/img/singlebutt3.png" ];

	for (var i = 0; i < buttsNumber; i++) {
		var top = Math.floor(Math.random() * (Math.floor(rect.height) - 100));
		var left = Math.floor(Math.random() * (Math.floor(rect.width) - 100));
		var randomImage = images[Math.floor(Math.random() * images.length)];

		floaties.innerHTML += '<img style="transform: rotate('+Math.floor(Math.random() * 200)+'deg); animation-delay:-'+(top / 100)+'s; left: '+left+'px; top:'+top+'px " class="cigbutt" src=" '+randomImage+' ">';
	}

	$('.floaties .cigbutt').mouseover(function() {
		this.parentNode.removeChild(this);
	});
}

function touchCapable() {
	return (('ontouchstart' in window)   ||   // html5 browsers
		(navigator.maxTouchPoints > 0)     ||   // future IE
		(navigator.msMaxTouchPoints > 0));      // current IE10
}

function howManyButts() {
	var buttAreaPx = 111 * 52; // area of ciggie butt images on average
	var screenAreaPx = window.innerHeight * window.innerWidth;
	var coveragePercent = 35;
	var byArea = (Math.floor((screenAreaPx * (coveragePercent / 100)) / buttAreaPx));
	if(touchCapable()) {
		return Math.min(byArea, 40); // Probably not using a mouse, let's cap the maximum butts for these users
	}
	return byArea;
}

addButts(howManyButts());

// Carousel section

if ($('.hero-carousel').length){

$('.hero-carousel').slick({ 
	autoplay      : true,
	autoplaySpeed : 3000,
	dots          : true, 
	prevArrow     : '<i class="fa fa-chevron-left"></i>',
	nextArrow     : '<i class="fa fa-chevron-right"></i>',
	infinite      : false,
	slidesToShow  : 2,
	slidesToScroll : 1,
});

}





