var myApp = {
    map: {},
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
            title: "My Location"
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
                        $(".availist ul").append("<li>" + data[ind].name + "</li>");
                        var partnerLatLng = new google.maps.LatLng(data[ind].lat, data[ind].lng);

                        var markerNear = new google.maps.Marker({
                            //map: map,
                            animation: google.maps.Animation.DROP,
                            position: partnerLatLng,
                            title: "partners"
                        });
                        markerNear.setMap(map);

                        var contentString = data[ind].name + " <br> " + data[ind].description;

                        var infowindow = new google.maps.InfoWindow({
                            content: contentString
                        });

                        google.maps.event.addListener(markerNear, 'mouseover', function () {
                            infowindow.open(map, markerNear);
                        });

                        google.maps.event.addListener(markerNear, 'mouseout', function () {
                            infowindow.close(map, markerNear);
                        });



                    });
                }
            });
        },
    },

    errorHandler: function (err) {
        if (err.code == 1) {
            alert("Error: Access is denied!");
        } else if (err.code == 2) {
            alert("Error: Position is unavailable!");
        }
    }

};

var eventos = {
    inicio: function () {
        //$("#map-canvas").hide();

        $("#makeRoom").hide();
        $("#createRoom").hide();
    },
    roomList: function () {
        $("#makeRoom").show();
        // $("#mCanvas").show();
        //$(".availist").slideDown();
    },

    createRoom: function () {
        $("#createRoom").show();
        $(".availist").hide();
        $("#mCanvas").hide();
    },

    elSearch: function () {

        $(".availist").slideDown();

    }
}

$(function () {
    myApp.initialize();
    myApp.getLocation();
    eventos.inicio();

    $("#search").on("click", function () {
        //$(".availist").hide();
        $("#mCanvas").show();
        eventos.elSearch();
        $(".participants").hide();

    });
    $(".roomL").on("click", function () {
        eventos.inicio();
        $("#lInput").hide();
        eventos.createRoom();
        $(".participants").hide();
    });
    $(".findP").on("click", function () {
        eventos.inicio();
        $("#lInput").show();
        $(".participants").hide();
    });

    $(".createR").on("click", function () {
        $(".availist").hide();
        $("#mCanvas").hide();
        $("#createRoom").hide();
        $("#makeRoom").show();
        $("#lInput").hide();
        $(".participants").hide();

    });

    $(".join").on("click", function () {
        $("#createRoom").hide();
        $(".participants").show();

    });
    $("#start-conferencing").on("click", function () {
        $("#makeRoom").hide();

    })

    $(".logo").on("click", function () {

        window.location.href = "http://10.50.30.14/hton/";

    })
})