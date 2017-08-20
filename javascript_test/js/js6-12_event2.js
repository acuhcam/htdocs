var event1 = document.getElementById("event1");
var event2 = document.getElementById("event2");
var event3 = document.getElementById("event3");
var event4 = document.getElementById("event4");
var event5 = document.getElementById("event5");
var event6 = document.getElementById("event6");
var event7 = document.getElementById("event7");
var event8 = document.getElementById("event8");
var evbody = document.getElementsByTagName("body")[0];
console.log(evbody);
var event9 = document.getElementById("event9");
var event10 = document.getElementById("event10");


// window.addEventListener("beforeunload", function(){
//   alert("beforeunload");
// }, false);

event2.addEventListener("blur", function(){
  console.log("blur");
}, false);

event2.addEventListener("change", function(){
  alert("change!");
}, false);

event1.addEventListener("click", function(){
  alert("click!!");
}, false);

event3.addEventListener("dblclick",function(){
  alert("dblclick!");
}, false);


// event5.addEventListener("focus", function() {
//   console.log("focus");
// }, false);

event2.addEventListener("input", function(){
  console.log("入力あり");
}, false);

event6.addEventListener("invalid", function(){
  alert("urlを入力してください");
}, false);

event7.addEventListener("keydown", function(){
  console.log("キーが押された！");
}, false);

event8.addEventListener("keypress", function(){
  console.log("キーが押されて離された！");
}, false);

event7.addEventListener("keyup", function(){
  console.log("キーが離された!");
}, false);


    window.addEventListener("load", function(){
      alert("ページのロードが完了しました");
    }, false);


event9.addEventListener("mousedown", function(){
  alert("マウスボタンが押されました");
}, false);

event9.addEventListener("mouseenter", function(){
  console.log("マウスカーソルが要素に入り込んできたよ");
}, false);

event9.addEventListener("mouseleave", function(){
  console.log("マウスカーソルが要素から出た");
}, false);

event9.addEventListener("mousemove", function(){
  console.log("マウスカーソルが要素の上を移動した");
}, false);

event9.addEventListener("mouseout", function(){
  console.log("マウスカーソルが要素の上から離れた");
}, false);

event3.addEventListener("mouseover", function(){
  console.log("マウスカーソルが要素の上に乗った");
}, false);

event3.addEventListener("mouseup", function(){
  console.log("マウスのボタンが離された");
}, false);


    window.addEventListener("popstate", function(){
      alert("戻る、進む");
    }, false);


window.addEventListener("resize", function(){
  console.log("windowのサイズが変更された");
}, false);

evbody.addEventListener("scroll", function(){
  console.log("スクロールバー");
}, false);

event7.addEventListener("select", function(){
  console.log("テキストが選択された");
}, false);


    // window.addEventListener("show", function(){
    //   alert("window,画像の表示");
    // }, false);


event10.addEventListener("submit", function(){
  alert("フォームを送信しようとした");
}, false)
