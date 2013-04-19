var userLat = "";
var userLong = "";
//var map="";

var myApp = {
    map:{},
	getLocation: function () {
        if (navigator.geolocation) {
            // timeout at 60000 milliseconds (60 seconds)
            var options = {
                timeout: 60000
            };
            navigator.geolocation.getCurrentPosition(myApp.showLocation, myApp.errorHandler, options);
        } else {
            alert("Sorry, browser does not support geolocation!");
        }
    },

    showLocation: function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        myApp.initialize(latitude, longitude);
    },

    initialize: function (latitude, longitude) {
		var myLatlng = new google.maps.LatLng(latitude, longitude);
		
		var mapOptions = {
			zoom: 12,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title:"My Location"
		});


        myApp.partners.loadJson();
    },  

    partners: {
        loadJson: function () {
            var serviceUrl = "js/data.json";
            $.ajax({
                url: serviceUrl,
                dataType: 'json',
                success: function (data) {
                    $.each(data, function (ind) {
                    	var partnerLatLng = new google.maps.LatLng(data[ind].lat, data[ind].lng);
                    	
                    	var markerNear = new google.maps.Marker({
							//map: map,
					        animation: google.maps.Animation.DROP,
							position: partnerLatLng,
							title:"partners"
						});
						markerNear.setMap(map);

					    var contentString = data[ind].name + " <br> " + data[ind].description;

					    var infowindow = new google.maps.InfoWindow({
					        content: contentString
					    });

					    google.maps.event.addListener(markerNear, 'mouseover', function() {
					        infowindow.open(map, markerNear);
					    });

					     google.maps.event.addListener(markerNear, 'mouseout', function() {
					        infowindow.close(map, markerNear);
					    });



                    });
                }
            });
        },
        drawNears: function(partnerLatLng){
        	console.log(partnerLatLng);
        	
        }
    },

	errorHandler: function (err) {
        if (err.code == 1) {
            alert("Error: Access is denied!");
        } else if (err.code == 2) {
            alert("Error: Position is unavailable!");
        }
    }

};

var eventos ={
    inicio: function(){
        $("#mCanvas").hide();
        $(".availist").hide();
        
    }
}

$(function () {
    myApp.getLocation();
    eventos.inicio();
})