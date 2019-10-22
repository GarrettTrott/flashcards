$(document).ready(function(){
$(".javascriptdiv").click(function(){
  $("#jsdefinition").slideDown();
  $("#javascript").css("cursor", "default");
$(".javascriptdiv").click(function(){
  $(".javascriptdiv").hide() ;
  $(".operatorsdiv").show();
  });
});
$(".operatorsdiv").click(function(){
  $("#operatorsdefinition").slideDown();
  $("#operators").css("cursor", "default");
$(".operatorsdiv").click(function(){
  $(".operatorsdiv").hide() ;
  $(".variablesdiv").show();
});
  $(".variablesdiv").click(function(){
    $("#variablesdefinition").slideDown();
    $("#variables").css("cursor", "default");
  $(".variablesdiv").click(function(){
    $(".variablesdiv").hide() ;
    $(".functiondiv").show();
  });
});
  $(".functiondiv").click(function(){
    $("#functiondefinition").slideDown();
    $("#function").css("cursor", "default");
  $(".functiondiv").click(function(){
    $(".functiondiv").hide() ;
    $(".methodsdiv").show();
    });
    $(".methodsdiv").slideDown();
      $("#methods").css("cursor", "default");
    $(".methodsdiv").click(function(){
      $(".methodsdiv").hide() ;
      $(".javascriptdiv").show();


    });
  });
});
});
