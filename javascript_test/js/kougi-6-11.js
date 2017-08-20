// function addition(){
//     var x = 1, y;
//     y = x + 1;
//     console.log(y);
// }
// addition(10)


// function AreaOfTriangle(width, height){
//     var area;
//     area = (width * height) / 2;
//     console.log("底辺の長さが『" + width + "』、高さが『" + height + "』の三角形の面積は『" + area +"』です");
// }
//
// AreaOfTriangle(40, 50);

function changeColor(id, font_color){
  document.getElementById(id).style.color = font_color
}

changeColor("test", "#0000ff");
changeColor("test1", "red");
changeColor("test2", "#ff0000");
changeColor("test3", "#00ff00");
