$(document).ready(pageReady);

function pageReady() {
  $.getJSON("getAPIKey.php",getAPIKey);
}

function getAPIKey(apiKey) {
  // console.log(apiKey);
  // if (data["error"]) {
  // if (data.hasOwnProperty("error")) {
  if ("error" in apiKey) {
    $("#authors").html("Fehler aufgetreten: "+apiKey["error"]);
  } else {
    $.getJSON("getAuthors.php","key="+apiKey["key"],getAuthors);
    anAPIKey=apiKey["key"];
  }
}

function getAuthors(authors) {
  // console.log(weather);
  if ("error" in authors) {
    if (authors["error"] == "Key expired.") {
      $.getJSON("getAPIKey.php",getAPIKey);
    } else {
      $("#authors").html("Fehler aufgetreten: "+authors["error"]);
    }
  } else {
    var html="";
    for (var i = 0; i < authors.length; i++) {
      html += "<option>" + authors[i] + "</option>";
    }

    $("#authors").html(html);
    $("#authors").change(authorSelected);
  }
}

function authorSelected() {
  var author=$(this).val();
  $.getJSON("getJokeByAuthor.php",{key: anAPIKey, author: author},getJoke);
}

function getJoke(joke){
  if ("error" in joke) {
    if (joke["error"] == "Key expired.") {
      $.getJSON("getAPIKey.php",getAPIKey);
    } else {
      $("#authors").html("Fehler aufgetreten: "+authors["error"]);
    }
  } else {
    // console.log(joke);
    var html="<details>";
    html+="<summary>"+joke["joke"]+"</summary>";
    html+="<p> - by "+joke["author"]+". Year "+joke["year"]+".</p>";
    html+="<p>Rank: "+joke["rank"]+"</p>";
    html+="</details>";
    $("#joke").html(html);    
  }
}
