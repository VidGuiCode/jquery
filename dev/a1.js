var apikey = "";

$(document).ready(function () {
    getApi(); // Beim Laden: zuerst Autoren laden
});

function getApi(funct = "authors", author = "") {
    $.getJSON("getKey.php", function (response) {
        apikey = response.key;

        if (funct === "joke") {
            getJoke(author);
        } else {
            getAuthors();
        }
    });
}

function getAuthors() {
    $.getJSON("getAuthors.php", { key: apikey }, function (response) {
        var html = "";
        for (var i = 0; i < response.length; i++) {
            html += "<option>" + response[i] + "</option>";
        }

        $("#select").html(html);

        // Direkt nach dem Einfügen der Optionen → ersten Witz anzeigen
        var firstAuthor = $("#select option:first").val();
        getJoke(firstAuthor);

        // Bei Auswahl: Witz holen
        $("#select").off("change").on("change", function () {
            var author = $(this).val();
            getApi("joke", author);
        });
    });
}

function getJoke(author) {
    $.getJSON("getJoke.php", { key: apikey, author: author }, function (data) {
        var html = "<details>";
        html += "<summary>" + data.joke + "</summary>";
        html += "<p>– von " + data.author + ", Jahr " + data.year + "</p>";
        html += "<p>Rang: " + data.rank + "</p>";
        html += "</details>";

        $("#inhalt").html(html);
    });
}
