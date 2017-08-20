var staff = [
  "安部",
  "野崎",
  "澁谷",
  "筒井",
  "三島",
  "藤木",
  "下川",
  "岩部",
  // "新規スタップ1"
];

console.log(staff.length);
console.log(staff[staff.length - 1]);
//

// これら時の変数は要素数が入る
// var add = staff.unshift("田中太郎");
// console.log(add);
//
// var a = staff.push("ジローラモ");
// console.log(a);

// 変数を利用すると、その変数に削除された要素が代入される
// インデックス番号◯番から△個要素を削除して、そこに□の要素（複数あり）を入れる
// var removed = staff.splice(1, 2, "A");
// console.log(removed);
// console.log(staff);

// 破壊のない結合
// var array1 = ["a", "b"];
// var array2 = ["c", "d"];
//
// var array = array1.concat(array2);
// console.log(array);
// console.log(array1);
// console.log(array2);
// var aaa = array2.concat(array1);
// console.log(aaa);

// 破壊的な結合
// var array1 = ["a", "b"];
// var array2 = ["c", "d"];
//
// Array.prototype.push.apply(array1, array2);
//
// console.log(array1);
// console.log(array2);

// var array = ["a", "b", "c", "a"];
// var value = array[array.length - 1];
// var value = array.indexOf("a");
// var value = array.lastIndexOf("a");

// var value = array.slice(2,4);



// Math.random は0以上１未満の擬似乱数を返す。0.1, 0.943とか。0.86*4とかを、さらにMath.floorで小さい数字に丸め込んでいるため、0,1,2,3が出ている。
// var value = Math.floor(Math.random() * array.length);
// console.log(array[value]);
// console.log(value);

var array = [1, 2, 3, 4];
var max = Math.max.apply(null, array);
var min = Math.min.apply(null, array);

console.log(max);
console.log(min);

// array.shift();
// console.log(array);

// console.log(array);
// array[0] = void 0;
// console.log(array);

// array.pop();
// console.log(array);

// array.splice(0, 4);
// console.log(array);

// 配列の長さを意図的に0にして、配列の全要素の削除
console.log(array);
array.length = 0;
console.log(array);

// 空配列を再代入して、初期化することによっても、配列の全要素の削除できる。
array = [];
console.log(array);


var aaa = {
  "田中": 100,
  "山田": 200
}

console.log(aaa["山田"]);
