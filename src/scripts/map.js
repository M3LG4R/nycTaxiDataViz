// REFACTOR FOR DRYNESS LATER 

let map;
let sliderVal
let filter;
let sliderControl;
let buttonControl;
let carTypeButton;

function initMap() {
    sliderControl = document.getElementById("time-slider")
    sliderVal = document.getElementById("slider-value");
    buttonControl = document.getElementById("toggle-type");
    carTypeButton = document.getElementById("toggle-car");
    timeFilter = sliderVal.value;
    typeFilter = buttonControl.value
    carFilter =  carTypeButton.value
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.745, lng: -73.975 },
        zoom: 11,
        // styles: mapStyles,
        streetViewControl: false,
        mapTypeControl: false,
        styles: [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#222222"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#222222"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#222222"
            },
            {
                "lightness": "10"
            },
            {
                "gamma": "01"
            },
            {
                "weight": "1"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": "10"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "weight": "0.75"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#222222"
            },
            {
                "lightness": "10"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
    }
    );
    map.data.loadGeoJson("data/taxi_zones.geojson");
    formatData(timeFilter, typeFilter, carFilter).then(options => {
    map.data.setStyle(function(feature) {
        // var boro = feature.getProperty('borough');
        // var areaName = feature.getProperty('zone');
        var location_code = parseInt(feature.getProperty('location_id'));
        // var numPickups = options[location_code] || 0;
        
        // var color = boro === 'Manhattan' ? 'red' : boro === "Brooklyn" ? 'blue' : boro === "Queens" ? 'yellow' : boro === "Bronx" ? 'green' : 'purple';
        // var neighborhood = feature.getProperty('zone');
        // var location_id = feature.getProperty('location_id');
        // var tooltip = document.createElement('div')
        // tooltip.className = "map-tooltip"
        var pickups = Object.values(options);
        // var low = [5, 69, 54];
        // var high = [151, 83, 34];
        var low = [26, 26, 26];
        var high = [255, 255, 255];
        var max_times = Math.max(...pickups);
        var min_times = Math.min(...pickups);
        var numTrips = options[location_code] || 0;
        var delta = (numTrips - min_times)/(max_times - min_times)
        // var delta = ((options[location_code] - min_times)/(max_times - min_times)) || 0;
        var color = [];
        for (var i = 0; i < 3; i++) {
          color[i] = (high[i] - low[i]) * delta + low[i];
        }
        if (feature.getProperty('state') === "hover") {
            var strokeWeight = 2;
            var zIndex = 2;
            var strokeColor = 'white';
        } else {
                var strokeWeight = .5;
                var zIndex = 1;
                var strokeColor = "black";
            }
        
        
        var opacity = (options[location_code] - min_times)/(max_times - min_times) || 0;
        return {
            fillColor: 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')',
            strokeWeight: strokeWeight,
            zIndex: zIndex,
            fillOpacity: .75,
            strokeColor: strokeColor,
        };

    });
    map.data.addListener('mouseover', function(e) {
        e.feature.setProperty('state', 'hover');
        var boro = e.feature.getProperty('borough');
        var areaName = e.feature.getProperty('zone');
        var location_code = parseInt(e.feature.getProperty('location_id'));
        var numPickups = options[location_code] || 0;
        var infoContent = '<p id="info-content">' + 
            '<span id="zone"><strong>Zone Name:</strong> ' + areaName + '</span>' +
            '<span id="boro"><strong>Borough:</strong> ' + boro + '</span>' +
            '<span id="num-pickups"><strong>Number of Pickups:</strong> ' + numPickups + '</span>' +
            '</p>';

        var infoWindow = new google.maps.InfoWindow({
            content: infoContent
        });
        infoWindow.setPosition(e.latLng);
        infoWindow.open(map);
        map.data.addListener('mousemove', function(e){
            infoWindow.setPosition(e.latLng);
        });
        map.data.addListener('mouseout', function (e) {
            e.feature.setProperty('state', 'normal');
            infoWindow.close();

        });

    });

        map.data.addListener('mouseout', function (e) {
            e.feature.setProperty('state', 'normal');
            var boro = e.feature.getProperty('borough');
            var areaName = e.feature.getProperty('zone');
            var location_code = parseInt(e.feature.getProperty('location_id'));
            var numPickups = options[location_code] || 0;
            var infoContent = '<div id="info-content>' +
                '<span id="zone">' + areaName + '</span>' +
                '<span id="boro"' + boro + '</span>' +
                '<span id="num-pickups">' + numPickups + '</span>';

            var infoWindow = new google.maps.InfoWindow({
                content: infoContent
            });
            infoWindow.setPosition(e.latLng);
            infoWindow.close();

        });
    });

    google.maps.event.addDomListener(sliderControl, 'change', function() {
        timeFilter = sliderVal.value;
        typeFilter = buttonControl.value;
        carFilter = carTypeButton.value;
        formatData(timeFilter, typeFilter, carFilter).then(options => {
    map.data.setStyle(function(feature) {
        var location_code = parseInt(feature.getProperty('location_id'));
        var pickups = Object.values(options);
        // var low = [0, 0, 10];
        // var high = [0, 0, 100];
        var low = [26, 26, 26];
        var high = [255, 255, 255];
        var max_times = Math.max(...pickups);
        var min_times = Math.min(...pickups);
        var numTrips = options[location_code] || 0;
        var delta = (numTrips - min_times)/(max_times - min_times)
        var color = [];
        for (var i = 0; i < 3; i++) {
          color[i] = (high[i] - low[i]) * delta + low[i];
        }
        if (feature.getProperty('state') === "hover") {
            var strokeWeight = 2;
            var zIndex = 2;
            var strokeColor = 'white';
        } else {
                var strokeWeight = .5;
                var zIndex = 1;
                var strokeColor = "black";
            }
        
        
        var opacity = (options[location_code] - min_times)/(max_times - min_times) || 0;
        return {
            fillColor: 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')',
            // fillColor: 'hsl(' + color[0] + ',' + color[1] + '%,' + color[2] + '%)',
            strokeWeight: strokeWeight,
            zIndex: zIndex,
            fillOpacity: .75,
            strokeColor: strokeColor,
        };

    });
    google.maps.event.clearListeners(map.data, 'mouseover');
    google.maps.event.clearListeners(map.data, 'mousemove');
    google.maps.event.clearListeners(map.data, 'mouseout');
      map.data.addListener('mouseover', function(e) {
        e.feature.setProperty('state', 'hover');
        var boro = e.feature.getProperty('borough');
        var areaName = e.feature.getProperty('zone');
        var location_code = parseInt(e.feature.getProperty('location_id'));
        var numPickups = options[location_code] || 0;
        var infoContent = '<p id="info-content">' + 
            '<span id="zone"><strong>Zone Name:</strong> ' + areaName + '</span>' +
            '<span id="boro"><strong>Borough:</strong> ' + boro + '</span>' +
            '<span id="num-pickups"><strong>Number of ' + typeFilter + ' :</strong> ' + numPickups + '</span>' +
            '</p>';

        var infoWindow = new google.maps.InfoWindow({
            content: infoContent
        });
        infoWindow.setPosition(e.latLng);
        infoWindow.open(map);
        map.data.addListener('mousemove', function(e){
            infoWindow.setPosition(e.latLng);
        });
        map.data.addListener('mouseout', function (e) {
            e.feature.setProperty('state', 'normal');
            infoWindow.close();

        });

    });
    });
    });


    google.maps.event.addDomListener(buttonControl, 'click', function() {
        timeFilter = sliderVal.value;
        typeFilter = buttonControl.value;
        carFilter = carTypeButton.value
        formatData(timeFilter, typeFilter, carFilter).then(options => {
    map.data.setStyle(function(feature) {
        var location_code = parseInt(feature.getProperty('location_id'));
        var pickups = Object.values(options);
        // var low = [0, 0, 10];
        // var high = [0, 0, 100];
        var max_times = Math.max(...pickups);
        var min_times = Math.min(...pickups);
        // var delta = (options[location_code] - min_times)/(max_times - min_times) || 0;
        var low = [26, 26, 26];
        var high = [255, 255, 255];
        var numTrips = options[location_code] || 0;
        var delta = (numTrips - min_times) / (max_times - min_times);
        var color = [];
        for (var i = 0; i < 3; i++) {
          color[i] = (high[i] - low[i]) * delta + low[i];
        }
        if (feature.getProperty('state') === "hover") {
            var strokeWeight = 2;
            var zIndex = 2;
            var strokeColor = 'white';
        } else {
                var strokeWeight = .5;
                var zIndex = 1;
                var strokeColor = "black";
            }
        
        
        var opacity = (options[location_code] - min_times)/(max_times - min_times) || 0;
        return {
            fillColor: 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')',
            strokeWeight: strokeWeight,
            zIndex: zIndex,
            fillOpacity: .75,
            strokeColor: strokeColor,
        };

    });
    google.maps.event.clearListeners(map.data, 'mouseover');
    google.maps.event.clearListeners(map.data, 'mousemove');
    google.maps.event.clearListeners(map.data, 'mouseout');
      map.data.addListener('mouseover', function(e) {
        e.feature.setProperty('state', 'hover');
        var boro = e.feature.getProperty('borough');
        var areaName = e.feature.getProperty('zone');
        var location_code = parseInt(e.feature.getProperty('location_id'));
        var numPickups = options[location_code] || 0;
        var infoContent = '<p id="info-content">' + 
            '<span id="zone"><strong>Zone Name:</strong> ' + areaName + '</span>' +
            '<span id="boro"><strong>Borough:</strong> ' + boro + '</span>' +
            '<span id="num-pickups"><strong>Number of ' + typeFilter + ' :</strong> ' + numPickups + '</span>' +
            '</p>';

        var infoWindow = new google.maps.InfoWindow({
            content: infoContent
        });
        infoWindow.setPosition(e.latLng);
        infoWindow.open(map);
        map.data.addListener('mousemove', function(e){
            infoWindow.setPosition(e.latLng);
        });
        map.data.addListener('mouseout', function (e) {
            e.feature.setProperty('state', 'normal');
            infoWindow.close();

        });

    });
    });
    });

    google.maps.event.addDomListener(carTypeButton, 'click', function() {
        timeFilter = sliderVal.value;
        typeFilter = buttonControl.value;
        carFilter = carTypeButton.value
        formatData(timeFilter, typeFilter, carFilter).then(options => {
    map.data.setStyle(function(feature) {
        var location_code = parseInt(feature.getProperty('location_id'));
        var pickups = Object.values(options);
        // var low = [0, 0, 10];
        // var high = [0, 0, 100];
        var max_times = Math.max(...pickups);
        var min_times = Math.min(...pickups);
        // var delta = (options[location_code] - min_times)/(max_times - min_times) || 0;
        var low = [26, 26, 26];
        var high = [255, 255, 255];
        var max_times = Math.max(...pickups);
        var min_times = Math.min(...pickups);
        var numTrips = options[location_code] || 0;
        var delta = (numTrips - min_times) / (max_times - min_times);
        var color = [];
        for (var i = 0; i < 3; i++) {
          color[i] = (high[i] - low[i]) * delta + low[i];
        }
        if (feature.getProperty('state') === "hover") {
            var strokeWeight = 2;
            var zIndex = 2;
            var strokeColor = 'white';
        } else {
                var strokeWeight = .5;
                var zIndex = 1;
                var strokeColor = "black";
            }
        
        
        var opacity = (options[location_code] - min_times)/(max_times - min_times) || 0;
        return {
            fillColor: 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')',
            strokeWeight: strokeWeight,
            zIndex: zIndex,
            fillOpacity: .75,
            strokeColor: strokeColor,
        };

    });
    google.maps.event.clearListeners(map.data, 'mouseover');
    google.maps.event.clearListeners(map.data, 'mousemove');
    google.maps.event.clearListeners(map.data, 'mouseout');
      map.data.addListener('mouseover', function(e) {
        e.feature.setProperty('state', 'hover');
        var boro = e.feature.getProperty('borough');
        var areaName = e.feature.getProperty('zone');
        var location_code = parseInt(e.feature.getProperty('location_id'));
        var numPickups = options[location_code] || 0;
        var infoContent = '<p id="info-content">' + 
            '<span id="zone"><strong>Zone Name:</strong> ' + areaName + '</span>' +
            '<span id="boro"><strong>Borough:</strong> ' + boro + '</span>' +
            '<span id="num-pickups"><strong>Number of ' + typeFilter + ' :</strong> ' + numPickups + '</span>' +
            '</p>';

        var infoWindow = new google.maps.InfoWindow({
            content: infoContent
        });
        infoWindow.setPosition(e.latLng);
        infoWindow.open(map);
        map.data.addListener('mousemove', function(e){
            infoWindow.setPosition(e.latLng);
        });
        map.data.addListener('mouseout', function (e) {
            e.feature.setProperty('state', 'normal');
            infoWindow.close();

        });

    });
    });
    });
  

}