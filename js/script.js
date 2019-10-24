console.log('YAY it loaded');

// Map section

	mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhciIsImEiOiJjazFwZ3ZqZ24wOXlkM2NtdTk1ZDg2dDRpIn0.MLFm1hFFjqz5mJpNy3AvWg';
	
	var map = new mapboxgl.Map({
		container: 'map', // container id
		style: 'mapbox://styles/evar/ck21kmpkw56i61ckif2z156zh', //hosted style id
		center: [151.252, -33.826], // starting position
		zoom: 14.1 // starting zoom
	
	});


// This is your link to what you created online
// map.on('click', function(e) {
//   var features = map.queryRenderedFeatures(e.point, {
//     layers: ['badbutts-balmoral-final'] // replace this with the name of the layer
//   });

//   if (!features.length) {
//     return;
//   }

//   var feature = features[0];

//   var popup = new mapboxgl.Popup({ offset: [0, -15] })
//     .setLngLat(feature.geometry.coordinates)
//     .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
//     .addTo(map);
// });


map.on('load', function() {
 
 // custom marker here
map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', function(error, image) {
if (error) throw error;
map.addImage('cat', image);

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
						"<h4>Clean Up #1</h4><p><i>20th October, 2019</i> <br><br> Items found: <ul><li>350 cigarette butts </li> <li> 12 straws </li> <li> 36 metal bottle caps </li></ul></p>",
					},

					"geometry": {
						"type": "Point",
						"coordinates": [151.2540407, -33.828763]
					}

				}, {
					"type": "Feature",
					"properties": {
						"description": 
						"<h4>Clean Up #2</h4><p>Items found: <ul><li>350 cigarette butts </li> <li> 12 straws </li> <li> 36 metal bottle caps </li></ul></p>",
					},
					"geometry": {
					"type": "Point",
					"coordinates": [151.25357949360148, -33.82703028980452]
					}

				}]
			}
		},

		"layout": {
			"icon-image": "cat",
			"icon-size": 0.1,
			"icon-allow-overlap": true,
		}

	});
});

	var popup = new mapboxgl.Popup({
		closeButton: false,
		closeOnClick: false
	});


	map.on('mouseenter', 'places', function(e) {
		// Change the cursor style as a UI indicator.
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
		popup.remove();
	});


});




// Floaties section

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


// Carousel section

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