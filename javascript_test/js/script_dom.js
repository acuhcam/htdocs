// console.log(window);
// console.log(document.getElementById("test").style);
// console.log(document.getElementById("test").style.color = "red");
// console.log(document.getElementById("test").style.backgroundColor = "black");
// alert(document.getElementById("test"));
// var elem = document.getElementById("test");
// elem.innerHTML = "<span style='color: blue;'>インナーHTML</span>";
// elem.style.color = "red";
// elem.innerText = "<span style='color: blue;'>インナーテキスト</span>";
// elem.textContent = "<p>テキストコンテント</p>";


// var p = document.createElement("p");
// var text = document.createTextNode("要素3");
// document.body.appendChild(p).appendChild(text);



window.onload = function() {
  // TODO: write code
  // console.log("Hello, runstant!");
  var form = document.forms.mainForm;
  // text
  form._text.value = 'Hello world';
  console.log('text:', form._text.value); //=> text: Hello world
  // radio
  form._radio.value = 'year';
  console.log('radio:', form._radio.value); //=> radio: year

  // checkbox
  form._checkB.checked = true;
  console.log('checkbox:', 'A=' + form._checkA.checked, 'B=' + form._checkB.checked); //=> checkbox: A=false B=true

  // selectbox
  form._select.value = 'year';
  console.log('select:', form._select.value); //=> select: year

  // textarea
  form._ta.value = 'Hello world';
  console.log('textarea:', form._ta.value); //=> textarea: Hello world

  // file
  form._file.onchange = function() {
    var file = form._file.files[0];

    var fr = new FileReader();
    fr.onload = function(res) {
      console.log(fr.result); // ファイルの中身を表示
    };
    fr.readAsText(file);
  };
};






// id指定
// console.log(document.getElementById("text1"));
// alert(document.getElementById("text1").firstChild.nodeValue);

//class指定
// console.log(document.getElementsByClassName("text2"));
// console.log(document.getElementsByClassName("text2").parentNode);

//タグ指定
// var x = document.getElementsByTagName("div");
// console.log(x[0]); //配列（オブジェクト）形式で取得されているので、取得したい要素のインデックスを指定する必要がある、添え字が必要.

//cssセレクタで指定
// var y = document.querySelector("#main #posts .oya h1"); //最初の一つのみを取得、なければnull
// y.innerHTML = "中身へんこうした"

// console.log(y);

// var z = document.querySelectorAll("a"); //全て取得、なければ空の配列として生成される
// console.log(z);




//親子兄弟要素へのアクセス
//親要素
// var element1 = document.getElementById("class1");
// console.log(element1.parentNode);

//子要素
// var element2 = document.getElementById("posts");
// console.log(element2.firstElementChild);
// console.log(element2.lastElementChild);
// console.log(element2.children);

//一つ前の要素
// console.log(element2.previousElementSibling);

//一つ後の要素
// console.log(element2.nextElementSibling);



// 要素の作成・追加
//要素の作成
// var div = document.createElement("div");
// div.textContent = "要素の作成";

//最後の子要素として追加
// element2.appendChild(div);

//最初の子要素として追加
// element2.insertBefore(div, element2.firstChild);

//要素の直前に追加
// element2.parentNode.insertBefore(div, element2);

//要素の直後に追加
// element2.parentNode.insertBefore(div, element2.nextSibling);




// 要素の削除
//特定の子要素の削除
// var child = document.createElement("div");
// child.textContent = "class3を追加した。"
// element2.insertBefore(child, element2.firstChild);

// element2.removeChild(child);

//自分を削除
// element2.parentNode.removeChild(element2);

//子要素を全て削除
// while(element2.firstChild) element2.removeChild(element2.firstChild);

//子要素全てを削除 part2
// element2.textContent = null;





// 属性の操作
//属性の取得
// console.log(element2.getAttribute("href"));

//属性の設定
// element2.setAttribute("href", "atarashiiURL//");
// console.log(element2.getAttribute("href"));

//属性を削除
// element2.removeAttribute("href");
// console.log(element2.getAttribute("href"));




// スタイル関連操作
//class追加
// console.log(element2.getAttribute("class"));
// element2.classList.add("active");
// console.log(element2.getAttribute("class"));

//class削除
// element2.classList.remove("active");
// console.log(element2.getAttribute("class"));

//classをトグル
//ON, OFFの切り替え
// element2.classList.toggle("active"); //ないので、ONになる
// element2.classList.toggle("active"); //OFFになる
// console.log(element2.getAttribute("class"));

//スタイルを直接指定
// element2.style.backgroundColor = "#e446e0";
