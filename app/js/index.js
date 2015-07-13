$.getJSON('http://api.wunderground.com/api/543f71dec17544bc/forecast10day/q/32344.json', function(data) {
  response = data.forecast.simpleforecast.forecastday;
  console.log(response);
  $forecast = $('#five-day-forecast');
  response.forEach(function(day) {
    $forecast.append("<div class='card'>" +
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
                          "<table class='striped centered'>" +
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
                      "</div>");
  });
});