// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
      $.ajax({
          url : "http://api.wunderground.com/api/c6b7ffd47b0274b0/geolookup/conditions/q/" + lat + ',' + long + ".json",
          dataType : "jsonp",
          success: function (data) {
              console.log(data);
              cityD = data.current_observation.display_location.city + ', ' +  data.current_observation.display_location.state;
              cTemp = data.current_observation.temp_f +'&deg;' + 'F';
              wSummary = data.current_observation.weather;
              windS = data.current_observation.wind_mph + ' mph';
              humid = 'Humidity ' + data.current_observation.relative_humidity;
              visible = 'Visibility ' + data.current_observation.visibility_mi + ' miles';
              $("#cityTitle").html(cityD);
              $("#cityDisplay").html(cityD);
              $("#currentTemp").html(cTemp);
              $("#summary").html(wSummary);
              $("#wind").html(windS);
              $("#humidity").text(humid);
              $("#add3").text(visible);

          }

    });






      $("#cover").fadeOut(250);
    }
           });



  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

