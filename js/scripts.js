$(document).ready(function() {
  $("#javascript").click(function() {
    $("#jsdefinition").slideDown()
    $("#javascript").css({"cursor": "default"})
  });
  $("#jsdefinition").click(function() {
    $("#javascript").hide()
    $("#jsdefinition").hide()
    $("#operators").show()
    $("#operators").css({"cursor": "pointer"})
  });
  $("#operators").click(function() {
    $("#operatorsdefinition").slideDown()
    $("#operators").css({"cursor": "default"})
  });
  $("#operatorsdefinition").click(function() {
    $("#operators").hide()
    $("#operatorsdefinition").hide()
    $("#variables").show()
    $("#variables").css({"cursor": "pointer"})
  });
  $("#variables").click(function() {
    $("#variablesdefinition").slideDown()
    $("#variables").css({"cursor": "default"})
  });
  $("#variablesdefinition").click(function() {
    $("#variables").hide()
    $("#variablesdefinition").hide()
    $("#function").show()
    $("#function").css({"cursor": "pointer"})
  });
  $("#function").click(function() {
    $("#functiondefinition").slideDown()
    $("#function").css({"cursor": "default"})
  });
  $("#functiondefinition").click(function() {
    $("#function").hide()
    $("#functiondefinition").hide()
    $("#methods").show()
    $("#methods").css({"cursor": "pointer"})
  });
  $("#methods").click(function() {
    $("#methodsdefinition").slideDown()
    $("#methods").css({"cursor": "default"})
  });
  $("#methodsdefinition").click(function() {
    $("#methods").hide()
    $("#methodsdefinition").hide()
    $("#javascript").show()
    $("#javascript").css({"cursor": "pointer"})
  });
});
