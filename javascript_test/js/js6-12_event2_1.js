document.getElementById("event1").addEventListener("show", function(){
  alert("window,画像の表示");
}, false);

var event2 = document.getElementById("event2");

event2.addEventListener("invalid", function(){
  console.log("urlを入力してください");
}, false);

window.addEventListener("popstate", function(){
  alert("戻る、進む");
}, false);
