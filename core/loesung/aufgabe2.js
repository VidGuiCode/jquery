$(document).ready(pageReady);

function pageReady() {
  $.getJSON("getAPIKey.php",getAPIKey);
  $("#refresh").click(refresh);
}

function refresh() {
  $.getJSON("getAPIKey.php",getAPIKey);
}

function getAPIKey(apiKey) {
  // console.log(apiKey);
  // if (data["error"]) {
  // if (data.hasOwnProperty("error")) {
  console.log(apiKey);
  if ("error" in apiKey) {
    $("#meteo").html("Fehler aufgetreten: "+apiKey["error"]);
  } else {
    $.getJSON("getWeather.php","key="+apiKey["key"],getWeather);
  }
}

function getWeather(weather) {
  // console.log(weather);
  if ("error" in weather) {
    $("#meteo").html("Fehler aufgetreten: "+weather["error"]);
  } else {
    htmlText= "<p>Feuchtigkeit: "         + weather["humidity"] + " %</p>";
    htmlText+="<p>Lufdruck: "             + weather["pressure"] + " hpa</p>";
    htmlText+="<p>Temperatur: "           + weather["temp"]     + " °C</p>";
    htmlText+="<p>Windgeschwindigkeit: "  + weather["wind_speed"] + " m/s</p>";
    $("#meteo").html(htmlText);
  }
}
