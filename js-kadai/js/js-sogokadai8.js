
/* 『名前 : {num: 数字, suit: 柄, image: 画像URL}』の情報を持つ大きな連想配列を作る。
乱数で親と子の数字を決めたのち、連想配列を参照して値を取り出す。
*/


loopCount = 0;
var cFlag = false;
var winCounts = 0; //親が勝った回数
var loseCounts = 0; //親が負けた回数
var win = 0;//勝率に使う用
var lose = 0; //勝率に使う用
// while(true){
//ゲームスタートボタンでゲーム開始
document.getElementById("button").addEventListener("click",function(){
  var input = Number(document.getElementById("input").value);


  if(input){ //数字が入力されてないと開始されない
    cFlag = true;
  }
  if(win + lose == input){
    win = 0;
    lose = 0;
  }
  while(cFlag){


    // console.log(input);




    //数字配列
    var allNumArray = [];
    for(var i =0; i < 52; i++){
      allNumArray.push(i + 1);
    }
    // console.log(allNumArray);

    //親と子の仮の配列
    var tempOya = [];
    var tempKodomo =[];
    var temps = [tempOya, tempKodomo] //親と子

    //親と子の数字保存配列
    var oyaNum = [];
    var kodomoNum = [];
    var numOfP = [oyaNum, kodomoNum] //親と子

    //親と子の柄保存配列
    var oyaSuit = [];
    var kodomoSuit = [];
    var suitsOfP = [oyaSuit, kodomoSuit] //親と子

    //柄の配列
    var suits = {1:"club", 2:"diamond", 3:"heart", 4:"spade"};

    //仮の配列4つ
    //連想配列の{}にしないことで、s1~c13を添え字でアクセスできる？
    //一方で、連結して一つの配列にした際は、{}にしておいた方がいいのか？
    var tempArray1 = []; //spade
    var tempArray2 = []; //heart
    var tempArray3 = []; //diamond
    var tempArray4 = []; //club

    //仮配列にそれぞれ1〜13を連想配列で入れる //関数化できそう
    for(var i = 0; i < 13; i++){
      tempArray1["c" + (i+1)] = i;
    }
    for(var i = 0; i < 13; i++){
      tempArray2["d" + (i+1)] = i;
    }
    for(var i = 0; i < 13; i++){
      tempArray3["h" + (i+1)] = i;
    }
    for(var i = 0; i < 13; i++){
      tempArray4["s" + (i+1)] = i;
    }




    //s1~c13入っている仮array四つに対して、s1~c13に対して3つの要素を持つ連想配列をつくる
    for(var i = 0; i < 13; i++){ //関数化できそう

      tempArray1["c" + (i+1)] = {num : (i+1), suitOfTru : suits[1], image :"./images/trump/c"+(i+1) + ".png" } ;

      tempArray2["d" + (i+1)] = {num : (i+1), suitOfTru : suits[2], image :"./images/trump/d"+(i+1) + ".png" } ;

      tempArray3["h" + (i+1)] = {num : (i+1), suitOfTru : suits[3], image :"./images/trump/h"+(i+1) + ".png" } ;

      tempArray4["s" + (i+1)] = {num : (i+1), suitOfTru : suits[4], image :"./images/trump/s"+(i+1) + ".png" } ;

    }

    //------------連想配列同士を結合して大もと連想配列をつくる--------------

    //これは連想配列部分がなくなってしまったので失敗
    // var y = tempArray3.concat(tempArray4);
    // console.log(y);

    //連想配列を結合して、一つの大もと連想配列をつくる
    var allTrumpArray = Object.assign(tempArray1, tempArray2, tempArray3, tempArray4);


    //全要素が入っているallTrumpArray連想配列から、keyを取得してallNameArrayを作る
    var allNameArray = []; //全要素の名前が集合してる配列
    for(key in allTrumpArray){
      allNameArray.push(key);
    }

    //-------------------------------------------------------------
    //-------確認用------------------------------------------------
    // console.log("====== 基本となる配列の確認 ======");
    // console.log("--- 全要素の連想配列 ----");
    // console.log("allTrumpArray");
    // console.log(allTrumpArray);
    // console.log("--- 全要素の名前の配列 ---");
    // console.log("allNameArray");
    // console.log(allNameArray);
    console.log("");
    //-------------------------------------------------------------


    //重複なしの親と子の配列をつくる
    for(var i = 0; i < 2; i++){
      var num = 1;
      var array = []; //重複無しを判定するための配列 //余裕があればこの配列無しに改変したい
      while(num < 6){
        var rand = Math.floor(Math.random() * 52);
        // console.log(rand);
        var flag = array.indexOf(allNumArray[rand]); //重複ないか判定フラグ0 or -1
        if(flag <= -1){
          array.push(allNumArray[rand])
          temps[i].push(allNameArray[rand]);
          num++;
        } else {
          continue;
        }
      }
    }



    //----------------------------------------------------
    //------親と子にランダムではいっているか---------------
    // console.log("====== 親子で共ににランダムで入っているか ======");
    console.log("--- 親 ---");
    console.log(tempOya);
    // console.log(numOfP[0]);
    console.log("--- 子 ---");
    console.log(tempKodomo);
    // console.log("");
    //-----------------------------------------------------


    /*
    親と子のランダム数字配列から、連想配列の数字と柄にアクセスして、
    各数字保存配列, 柄保存配列に代入する
    */
    for(var i = 0; i < 2; i++){
      for(var k in temps[i]){
        numOfP[i].push(allTrumpArray[temps[i][k]]["num"]);
        suitsOfP[i].push(allTrumpArray[temps[i][k]]["suitOfTru"]);
      }
    }

    //数字保存配列を、判定に使えるように昇順
    //sort()を拡張して昇順にできるようにした //デフォルトsort()ではうまくいかなかった
    var ascOyaNum = oyaNum.slice().sort(function(a, b){
      return a - b;
    });

    var ascKodomoNum = kodomoNum.slice().sort(function(a, b){
      return a - b;
    });




    //----ソート確認用----------------------------------------------
    // console.log("====== ソート確認 ======");
    // console.log("== ソート前 ==");
    // console.log("親 " + oyaNum);
    // console.log("子 " + kodomoNum);
    // console.log("== ソート後 ==");
    // console.log("--- 親 ---");
    // console.log("数字 " + ascOyaNum);
    // console.log("柄 " + oyaSuit);
    // console.log("---- 子 ----");
    // console.log("数字 " + ascKodomoNum);
    // console.log("柄 " + kodomoSuit);
    // console.log("");
    //-------------------------------------------------------------



    //---------------- カードの結果判定 ----------------

    //----- 役（rank）判定 -----------------------------
    var ranks = {"ロイヤルフラッシュ": 9, "ストレートフラッシュ": 8, "フォーカード": 7, "フルハウス": 6, "フラッシュ": 5, "ストレート": 4, "スリーオブアカインド": 3, "ツーペア": 2, "ワンペア": 1, "ハイカード": 0}

    //----- 役が同じ場合に使うハイカード判定用の配列 -------------
    //添え字で判定（1が一番強いため）
    var highCard = [2, 3 ,4 ,5 ,6 ,7 ,8 ,9 , 10, 11, 12, 13, 1];


    //----- 役の結果確認 ------------------
    // console.log("親の手札");
    // console.log(ascOyaNum);
    // console.log(oyaSuit);
    // console.log("子の手札");
    // console.log(ascKodomoNum);
    // console.log(kodomoSuit);
    // console.log("-------------------");
    //--------------------------------------------


    console.log("親の役");
    var oyaResult = "";
    var oyaRank = 0;
    var oyaHigh = 0;
    var oyaResult1 = judgeRan1(ascOyaNum, oyaSuit, oyaResult);
    var oyaResult2 = judgeRan2(ascOyaNum, oyaResult);
    if(oyaResult1){
      oyaResult = oyaResult1;
      oyaRank = ranks[oyaResult1];
    } else {
      oyaResult = oyaResult2;
      oyaRank = ranks[oyaResult2];
    }
    console.log(oyaResult);
    // console.log(ascOyaNum);
    oyaHigh = ascOyaNum.slice().pop();

    // printRank(oyaResult, "oya");
    //役の確認
    // console.log(oyaRank);


    console.log("子の役");
    var kodomoResult = "";
    var kodomoRank = 0;
    var kodomoHigh = 0;
    var kodomoResult1 = judgeRan1(ascKodomoNum, kodomoSuit, kodomoResult);
    var kodomoResult2 = judgeRan2(ascKodomoNum, kodomoResult);
    if(kodomoResult1){
      kodomoResult = kodomoResult1;
      kodomoRank = ranks[kodomoResult1];
    } else {
      kodomoResult = kodomoResult2;
      kodomoRank = ranks[kodomoResult2];
    }
    console.log(kodomoResult);
    // console.log(ascKodomoNum);
    kodomoHigh = ascKodomoNum.slice().pop();


    // printRank(kodomoResult, "kodomo");
    //役の確認
    // console.log(kodomoRank);


    // var oyaRank = ranks[oyaResult]; //数字で返ってくる
    var kodomoRank = ranks[kodomoResult]

    //勝ち負け判定
    if(kodomoRank < oyaRank){
      if(win == 1){
        continue;
      } else {
        printJudge("Win", "oya");
        winCounts++;
        win++;
        printJudge("Lose", "kodomo");
      }
    } else if(kodomoRank == oyaRank){
      if(oyaRank == 0 && kodomoRank == 0){
        //役の番号が同じ場合はハイカードで勝ち負け判定
        oyaHigh = highCard.indexOf(oyaHigh);
        kodomoHigh = highCard.indexOf(kodomoHigh);
        // console.log(ascOyaNum.slice().pop());
        // console.log(ascKodomoNum.slice().pop());
        if(kodomoHigh < oyaHigh){
          if(win ==1){
            continue;
          } else {
            printJudge("Win", "oya");
            winCounts++;
            win++;
            printJudge("Lose", "kodomo");
            console.log("親の勝ち");
          }
        } else if(kodomoHigh > oyaHigh){
          if(win == 0 && lose == (input-1)){
            continue;
          } else {
            printJudge("Lose", "oya");
            loseCounts++;
            lose++;
            printJudge("Win", "kodomo");
            console.log("子供の勝ち");
          }
        } else if(kodomoHigh == oyaHigh){
          printJudge("Draw", "oya");
          printJudge("Draw", "kodomo");
          console.log("ドロー");
        }
      } else {
        printJudge("Draw", "oya");
        printJudge("Draw", "kodomo");
        console.log("ドロー");
      }
    } else {
      if(win == 0 && lose == (input-1)){
        continue;
      } else {
        printJudge("Lose", "oya");
        loseCounts++;
        lose++;
        printJudge("Win", "kodomo");
        console.log("子供の勝ち");
      }
    }


    printRank(kodomoResult, "kodomo");
    printRank(oyaResult, "oya");
    // カード表示
    printImage(tempOya, "oya-trump");
    printImage(tempKodomo, "kodomo-trump");

    // loopCount++;
    cFlag = false;
    console.log("親の");
    console.log("全体での勝ち数 " + winCounts);
    console.log("全体での敗け数 " + loseCounts);
    console.log("input回中の勝ち数 " + win);
    console.log("input回中の敗け数 " + lose);
  }; //while

  // カード表示関数
  function printImage(array, place){
    for(var i = 0; i < array.length; i++){
      var image = allTrumpArray[array[i]]["image"];
      // console.log(allTrumpArray[array[i]]["image"]);
      document.getElementById(place + (i+1)).setAttribute("src",image)
    }
  }

  //勝敗表示
  function printJudge(result, place){
    document.getElementById(place + "Result").innerHTML = result;
    console.log(place + "の" + result);
  }

  //役名表示
  function printRank(result, place){
    document.getElementById(place + "Rank").innerHTML = result;
  }




  document.getElementById("winCounts").innerHTML = winCounts;
  document.getElementById("loseCounts").innerHTML = loseCounts;

});



//-------- 役を判定する関数 ------------

//判定関数その1(ロイヤルフラッシュ, ストレートフラッシュ, フラッシュ, ストレート)
function judgeRan1(numArray, suitArray, result){
  var flag = 0;
  var num = 0; //役判定用数字
  var rf = [10, 11, 12, 13, 1]; //ロイヤルフラッシュ判定用でエースが末尾にある
  // console.log(numArray[0] == 1);

  for(var x = 0; x < 2; x++){ //先頭が1だっ時のために、2回行う
    if(x == 1){ //2回目のループで先頭要素を末尾に持っていき、1があった時に備える
      if(numArray[0] == 1){
        var min = numArray.shift(); //エースがあったら末尾にもっていく
        numArray.push(min);
        // high = min; //ハイカード
        // console.log("1があったので大ループ2回目");
        // console.log(numArray);
      }
    }


    // console.log(m + "回目");
    num = 0;
    for(var i = 0; i < 4; i++){ //ストレート
      if(x == 0){
        if(numArray[i]+1 == numArray[i+1]){
          num++;
          if(num == 4){
            result = "ストレート";
            // resultArray = numArray; //配列にアクセスできる変数
            console.log("ストレート");
          }
        } else {
          num =  0; //なかったら初期化
          break ;
        }
      } else {
        if(numArray[i] == rf[i]){
          num++;
          if(num == 5){
            result = "ストレート";
            console.log("ストレート");
          }
        } else {
          num =  0; //なかったら初期化
          break ;
        }
      }
    }

    num = 0;
    for(var i = 0; i < numArray.length; i++){ //フラッシュ
      if(x == 0){
        if(suitArray[i] == suitArray[suitArray.length-1]){
          num++;
          if(num == 4){
            result = "フラッシュ";
            console.log("フラッシュ");
          }
        } else {
          num = 0;
          break;
        }
      }
    }

    num = 0;
    for(var i = 0; i < 4; i++){ //連番かつ柄が一緒 ストレートフラッシュ
      // console.log((numArray[i]+1 == numArray[i+1]) && (suitArray[i] == suitArray[suitArray.length-1]));

      if((numArray[i]+1 == numArray[i+1]) && (suitArray[i] == suitArray[suitArray.length-1])){
        num++;
        // console.log(num);
        if(num == 4){
          result = "ストレートフラッシュ";
          // resultArray = numArray; //配列にアクセスできる変数
          console.log("ストレートフラッシュ");
        }
      } else {
        num =  0; //なかったら初期化
        break ;
      }
    }

    num = 0;
    for(var i = 0; i < numArray.length; i++){ //rfに一致&&柄が一緒 ロイヤルフラッシュ
      // console.log((numArray[i] == rf[i]) && (suitArray[i] == suitArray[suitArray.length-1]));
      if((numArray[i] == rf[i]) && (suitArray[i] == suitArray[suitArray.length-1])){
        num++;
        if(num == 4){
          result = "ロイヤルフラッシュ";
          console.log("ロイヤルフラッシュ");
        }
      } else {
        num = 0;
        break;
      }
    }
    // console.log(result);
  }
  return result;
}


//判定関数その2(フォーカード, フルハウス, スリーオブアカインド, ツーペア, ワンペア, ハイカード)
//昇順にした手札の末尾をとって探索し、役を出す
function judgeRan2(numArray, result){
  var num = 0;
  var newArray = [];
  for(var i = 0; i < numArray.length; i++){
    newArray[i] = numArray[i]
  }
  // var val = numArray.pop();
  // var val = newArray.pop();
  for(var i = 0; i < 4; i++){
    // if(numArray == 1){
    //   high = numArray[0];
    // } else {
    //   high = val
    // }

    // var val = numArray.pop();
    var val = newArray.pop();

    // if(i == 0){
    //   high = val;
    // }
    for(var k = 0; k < newArray.length; k++){
      if(newArray[k] == val) {
        num += 1;
      }
    }
    if(num == 6){
      result = "フォーカード";
    } else if(num == 4){
      result = "フルハウス"
    } else if(num == 3){
      result = "スリーオブアカインド";
    } else if(num == 2){
      result = "ツーペア";
    } else if(num == 1){
      result = "ワンペア";
    } else {
      result = "ハイカード";
    }
  }
  // console.log(newArray);
  // console.log(numArray);
  return result;
}


//
// if(win + lose == input){
//   win = 0;
//   lose = 0;
// }
//
//
// if (win == 1) {
//   continue;
// }
//
// if(win == 0 && lose == (input-1)){
//     continue;
// }
