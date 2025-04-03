$(document).ready(pageReady);

function pageReady() {
  $("#getAllUntis").click(getAllUntis);
  $("#getRandomProf").click(getRandomProf);
  $("#getProfByName").click(getProfByName);
}

function  getAllUntis() {
  $.getJSON("getAllUntis.php",createUntisTable);
}

function createUntisTable(allUntis) {
  // console.log(allUntis);
  var htmlTable="<table border='1'>";
  for (var i = 0; i < allUntis.length; i++) {
    htmlTable += "<tr><td>" + allUntis[i] + "</td></tr>";
  }
  htmlTable += "</table>";
  $("#allUntis").html(htmlTable);
  $("#allUntis td").click(untisClicked);
}

function  getRandomProf() {
  $.getJSON("getRandomProf.php",showRandomProf);
}

function showRandomProf(randomProf) {
  // console.log(randomProf);
  var htmlTable="<table border='1'>";
  htmlTable+="<tr><td>" + randomProf["lastName"] + "</td></tr>";
  htmlTable+="<tr><td>" + randomProf["firstName"] + "</td></tr>";
  htmlTable+="<tr><td>" + randomProf["email"] + "</td></tr>";
  // for (var field in randomProf) {
  //   htmlTable += "<tr><td>" + randomProf[field] + "</td></tr>";
  // }
  htmlTable += "</table>";
  $("#randomProf").html(htmlTable);
}

function  getProfByName() {
  var name=$("#prof").val();
  $.getJSON("getProfByName.php","name="+name,showProfByName);
}

function showProfByName(profByName) {
  console.log(profByName);
  var htmlTable="<table border='1'>";
  for (var i = 0; i < profByName.length; i++) {
    htmlTable += "<tr><td>" + profByName[i] + "</td></tr>";
  }
  htmlTable += "</table>";
  $("#profByName").html(htmlTable);
}

function untisClicked() {
  // console.log($(this).html());
  var untis=$(this).html();
  $(this).attr("id","selected");
  $.getJSON("getProfByUntis.php","untis="+untis,showProfByUntis);
}



function showProfByUntis(profByUntis) {
  console.log(profByUntis);

  var htmlText=profByUntis["lastName"] + " " + profByUntis["firstName"] + " " +  profByUntis["email"];
  $("#selected").html(htmlText);
  $("#selected").attr("id","");
}
