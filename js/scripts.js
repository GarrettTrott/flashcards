$(document).ready(function() {
  $("#javascript").click(function() {
    $("#jsdefinition").slideDown()
  });
  $("#jsdefinition").click(function() {
    $("#javascript").hide()
    $("#jsdefinition").hide()
    $("#operators").show()
  });
  $("#operators").click(function() {
    $("#operatorsdefinition").slideDown()
  });
  $("#operatorsdefinition").click(function() {
    $("#operators").hide()
    $("#operatorsdefinition").hide()
    $("#variables").show()
  });
  $("#variables").click(function() {
    $("#variablesdefinition").slideDown()
  });
  $("#variablesdefinition").click(function() {
    $("#variables").hide()
    $("#variablesdefinition").hide()
    $("#function").show()
  });
  $("#function").click(function() {
    $("#functiondefinition").slideDown()
  });
  $("#functiondefinition").click(function() {
    $("#function").hide()
    $("#functiondefinition").hide()
    $("#methods").show()
  });
  $("#methods").click(function() {
    $("#methodsdefinition").slideDown()
  });
  $("#methodsdefinition").click(function() {
    $("#methods").hide()
    $("#methodsdefinition").hide()
    $("#javascript").show()
  });
});
