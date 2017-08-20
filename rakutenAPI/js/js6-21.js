

function createTH(){
  var table = document.getElementById("table");
  var row = table.insertRow();
  row.insertCell().innerHTML = "順位";
  row.insertCell().innerHTML = "商品名";
  row.insertCell().innerHTML = "商品画像";
  row.insertCell().innerHTML = "値段";
  row.insertCell().innerHTML = "内容";
}


document.getElementById("genre1").addEventListener("click", function(){

  //tableを初期化してから表示する
  var table = document.getElementById("table");
  console.log(table.rows[0]);
  while(table.rows[0]){
    table.deleteRow(table.rows[0]);
  }

  //きゅうり
  fetch("https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?format=json&genreId=204820&applicationId=1088089792418084361")
  .then(function (data){
    return data.json(); //読み込むデータをJSONに設定
  }).then(function (json){
    // jsonにJSONオブジェクトで結果が渡される
    console.log(json);
    var list = json.Items;

//----- 確認 ----------
    // var rank = list[0]["Item"]["rank"]
    // var name = list[0]["Item"]["itemName"]
    // var price = list[0]["Item"]["itemPrice"]
    // var caption = list[0]["Item"]["itemCaption"]
    // console.log(rank);
    // console.log(name);
    // console.log(price);
    // console.log(caption);
//-----------------------
    createTH();
    for (var i = 0; i < list.length; i++){

      var rank = list[i]["Item"]["rank"];
      var name = list[i]["Item"]["itemName"];
      var image = list[i]["Item"]["mediumImageUrls"][0]["imageUrl"]
      var price = list[i]["Item"]["itemPrice"];
      var caption = list[i]["Item"]["itemCaption"];
      var url = list[i]["Item"]["itemUrl"];

      var table = document.getElementById("table");
      var row = table.insertRow();
      row.insertCell().innerHTML = rank;
      row.insertCell().innerHTML = "<a href=" + url +" target='_blank'>" + name + "</a>";
      row.insertCell().innerHTML = "<img src=" + image + ">";
      row.insertCell().innerHTML = price + "円";
      row.insertCell().innerHTML = caption;

    }

  })

});





//掃除機・クリーナー
document.getElementById("genre2").addEventListener("click", function(){

  //tableを初期化してから表示する
  var table = document.getElementById("table");
  console.log(table.rows[0]);
  while(table.rows[0]){
    table.deleteRow(table.rows[0]);
  }

  fetch("https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?format=json&genreId=204492&applicationId=1088089792418084361")
  .then(function (data){
    return data.json(); //読み込むデータをJSONに設定
  })
  .then(function (json){
    // jsonにJSONオブジェクトで結果が渡される
    console.log(json);
    var list = json.Items;
    //----- 確認 ----------
        // var rank = list[0]["Item"]["rank"]
        // var name = list[0]["Item"]["itemName"]
        // var price = list[0]["Item"]["itemPrice"]
        // var caption = list[0]["Item"]["itemCaption"]
        // console.log(rank);
        // console.log(name);
        // console.log(price);
        // console.log(caption);
    //-----------------------
    createTH();
    for (var i = 0; i < 10; i++){

      var rank = list[i]["Item"]["rank"];
      var name = list[i]["Item"]["itemName"];
      var image = list[i]["Item"]["mediumImageUrls"][0]["imageUrl"]
      var price = list[i]["Item"]["itemPrice"];
      var caption = list[i]["Item"]["itemCaption"];
      var url = list[i]["Item"]["itemUrl"];

      var table = document.getElementById("table");
      var row = table.insertRow();
      row.insertCell().innerHTML = rank;
      row.insertCell().innerHTML = "<a href=" + url +" target='_blank'>" + name + "</a>";
      row.insertCell().innerHTML = "<img src=" + image + ">";
      row.insertCell().innerHTML = price + "円";
      row.insertCell().innerHTML = caption;


    }

  })

});


//ネックレス・ペンダント
document.getElementById("genre3").addEventListener("click", function(){

  //tableを初期化してから表示する
  var table = document.getElementById("table");
  console.log(table.rows[0]);
  while(table.rows[0]){
    table.deleteRow(table.rows[0]);
  }

  fetch("https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?format=json&genreId=111029&applicationId=1088089792418084361")
  .then(function (data){
    return data.json(); //読み込むデータをJSONに設定
  })
  .then(function (json){
    // jsonにJSONオブジェクトで結果が渡される
    console.log(json);
    var list = json.Items;
    //----- 確認 ----------
        // var rank = list[0]["Item"]["rank"]
        // var name = list[0]["Item"]["itemName"]
        // var price = list[0]["Item"]["itemPrice"]
        // var caption = list[0]["Item"]["itemCaption"]
        // console.log(rank);
        // console.log(name);
        // console.log(price);
        // console.log(caption);
    //-----------------------
    createTH();
    for (var i = 0; i < 10; i++){

      var rank = list[i]["Item"]["rank"];
      var name = list[i]["Item"]["itemName"];
      var image = list[i]["Item"]["mediumImageUrls"][0]["imageUrl"]
      var price = list[i]["Item"]["itemPrice"];
      var caption = list[i]["Item"]["itemCaption"];
      var url = list[i]["Item"]["itemUrl"];

      var table = document.getElementById("table");
      var row = table.insertRow();
      row.insertCell().innerHTML = rank;
      row.insertCell().innerHTML = "<a href=" + url +" target='_blank'>" + name + "</a>";
      row.insertCell().innerHTML = "<img src=" + image + ">";
      row.insertCell().innerHTML = price + "円";
      row.insertCell().innerHTML = caption;

    }

  })

});
