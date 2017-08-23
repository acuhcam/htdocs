$(function(){
  $("#main").blur(function(){
    var main = $("#main").val();
    console.log(main);
    $("#input").val([main]);
    
  });
});
