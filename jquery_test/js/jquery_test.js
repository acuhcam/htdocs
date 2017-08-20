$(function(){
  $("#test").click(function(){
    $(this).text("クリックされました");
  });
});

$(function(){
  $("p").mouseover(function(){
    $(this).text("マウスーバーされました")
  });
});

$(function(){
  $("p").mouseout(function(){
    $(this).text("マウスアウトしました")
  });
});

$(function(){
  $("input").focus(function(){
    $("input").css("background-color", "red")
  }).blur(function(){
    $("input").css("background-color", "green")
  });
});
