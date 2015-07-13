$submit = $('#submitZip');
$submit.on('click', function(event){
  event.preventDefault();
  cleanPage();
  var userInput = $('#userZip').val();
  $.getJSON('http://api.wunderground.com/api/543f71dec17544bc/forecast10day/q/' + userInput + '.json', function(data) {
    response = data.forecast.simpleforecast.forecastday;
    response = response.slice(0,3);
    $forecast = $('#fiveDayForecast');
    response.forEach(function(day) {
      $forecast.append("<div class='col l4 s12'>" +
                          "<div class='card'>" +
                            "<div class='card-content'>" +
                              "<div class='card-title red-text center-align'>" +
                                day.date.weekday +
                                ", " +
                                day.date.monthname_short +
                                " " +
                                day.date.day +
                              "</div>" +
                              "<div class='center-align'>" +
                                "<img src=" +
                                  day.icon_url +
                                ">" +
                              "</div>" +
                              "<table class='striped'>" +
                                "<tr>" +
                                  "<th>Hi:</th>" +
                                    "<td>" + day.high.fahrenheit + "</td>" +
                                "</tr>" +
                                "<tr>" +
                                  "<th>Lo:</th>" +
                                    "<td>" + day.low.fahrenheit + "</td>" +
                                "</tr>" +
                                "<tr>" +
                                  "<th>Humidity:</th>" +
                                    "<td>" + day.avehumidity + "</td>" +
                                "</tr>" +
                              "</table>" +
                            "</div>" +
                          "</div>" +
                        "</div>");
    });
  });
  $.getJSON('http://api.wunderground.com/api/543f71dec17544bc/geolookup/q/'+ userInput +'.json', function(data) {
    $('#cityName').append("<h4 class='center-aligned'>" + data.location.city + ", " + data.location.state + "</h4");
  });
});

function cleanPage(){
  $('#fiveDayForecast').empty();
  $('#cityName').empty();
};