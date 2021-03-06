

function createTH(){
  var table = document.getElementById("table");
  var row = table.insertRow();
  row.insertCell().innerHTML = "順位";
  row.insertCell().innerHTML = "商品名";
  row.insertCell().innerHTML = "商品画像";
  row.insertCell().innerHTML = "値段";
  row.insertCell().innerHTML = "内容";
}

// var url = ["https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?format=json&genreId=204820&applicationId=1088089792418084361", "https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?format=json&genreId=204492&applicationId=1088089792418084361",  "https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?format=json&genreId=111029&applicationId=1088089792418084361"]



function getJSON() {
  var req = new XMLHttpRequest();		  // XMLHttpRequest オブジェクトを生成する
  req.onreadystatechange = function() {		  // XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
    if(req.readyState == 4 && req.status == 200){ // サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
      // alert(req.responseText);		          // 取得した JSON ファイルの中身を表示
      console.log(req.readyState);
      console.log(req.status);
      console.log(req);
      console.log(req.response);
      var obj = JSON.parse(req.response);
      console.log(obj);


    }
  };
  req.open("GET", "https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?format=json&genreId=204820&applicationId=1088089792418084361", false); // HTTPメソッドとアクセスするサーバーの　URL　を指定
  req.send(null);					    // 実際にサーバーへリクエストを送信
}

getJSON();





document.getElementById("genre1").addEventListener("click", function(){

  //tableを初期化してから表示する
  var table = document.getElementById("table");
  while(table.rows[0]){
    table.deleteRow(table.rows[0]);
  }

  //きゅうり
  fetch("https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?format=json&genreId=204820&applicationId=1088089792418084361")
  .then(response => response.json()) //読み込むデータをJSONに設定
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.readyState);
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

  }).catch(e => console.log("error"))

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
  .then(function (response){
    return response.json(); //読み込むデータをJSONに設定
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
  .then(function (response){
    return response.json(); //読み込むデータをJSONに設定
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
