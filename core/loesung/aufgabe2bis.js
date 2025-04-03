$(document).ready(pageReady);

function pageReady() {
  $.getJSON("getAPIKey.php",getAPIKey);
  setInterval(getWeatherAgain, 10000);
}

function getAPIKey(apiKey) {
  // console.log(apiKey);
  // if (data["error"]) {
  // if (data.hasOwnProperty("error")) {
  if ("error" in apiKey) {
    $("#meteo").html("Fehler aufgetreten: "+apiKey["error"]);
  } else {
    $.getJSON("getWeather.php","key="+apiKey["key"],getWeather);
    anAPIKey=apiKey["key"];
  }
}

function getWeather(weather) {
  // console.log(weather);
  if ("error" in weather) {
    if (weather["error"] == "Key expired.") {
      $.getJSON("getAPIKey.php",getAPIKey);
    } else {
      $("#meteo").html("Fehler aufgetreten: "+weather["error"]);
    }
  } else {
    htmlText= "<p>Feuchtigkeit: "         + weather["humidity"] + " %</p>";
    htmlText+="<p>Lufdruck: "             + weather["pressure"] + " hpa</p>";
    htmlText+="<p>Temperatur: "           + weather["temp"]     + " °C</p>";
    htmlText+="<p>Windgeschwindigkeit: "  + weather["wind_speed"] + " m/s</p>";
    $("#meteo").html(htmlText);
  }
}

function getWeatherAgain() {
  $.getJSON("getWeather.php","key="+anAPIKey,getWeather);
}
