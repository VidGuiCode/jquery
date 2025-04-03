<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A1</title>
</head>
<style>
    table,
    td {
        border: 1px solid black;
    }
</style>

<script src="../jquery/jquery-3.7.1.min.js"></script>

<body>
    <h1>Meteo-indormation der Stadt Luxembourg</h1>
    <div id="inhalt">
        <p>loading ...</p>
    </div>
    <button id="r">refresh</button>
    <script>
        $(document).ready(getKey);

        function getKey() {
            $.ajax({
                url: "getKey.php",
                type: "GET",
                dataType: "json",
                success: function (response) {
                    if ("error" in response) {
                        $("#inhalt").html("fehler: " + response.error);
                        return;
                    }
                    fetchMeteo(response.key);
                }
            });
        }

        $(document).ready(function () {
            $('#r').click(function () {
                getKey();
            });
        });


        function fetchMeteo(ApiKey) {
            $.ajax({
                url: "getWeather.php?apikey=" + ApiKey,
                type: "GET",
                dataType: "json",
                success: function (response) {
                    if ("error" in response) {
                        $("#inhalt").html("fehler: " + response.error);
                        return;
                    }

                    $("#inhalt").html("<p> feuchtigkeit: " + response.humidity + "%</p> <p>Luftdruck: " + response.pressure + "hpa</p> <p>temperatur " + response.temp + "C</p> <p>Windgeschwindikeit: " + response.wind_speed + "m/s</p>");
                }
            });
        }
    </script>
</body>

</html>