<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>PHPの学習</title>
</head>
<body>

  <?php
//
//   echo "Hello World";
//
//   echo'<span style="color: #ff0000;"> タグ</span> "hello world"';
//
//   echo'<span style="color: #ff0000;"> 改行</span>
//   "Hello World"';
//
//   $str_hello = "hello, world";
//
//   echo $str_hello;
//
//   echo "こんにちは: ", "こんばんは";
//   print "こんにちは";
//   $str = <<<EOM
//   ここの
//   長い文章
//   例えば、あああああああああああああああああああああ
//   などを記述します。
// EOM;
//
//   echo $str;
//
//   $str_name = "太郎";
//
//   echo <<<EOM
//
//   ヒアドキュメントです。
//   こんにちは。$str_name だよ。
// EOM;
//
//   echo <<<EOM
//
//   ヒアドキュメントで、<br>
//   長い文章も楽々表示できるよ！！
//
// EOM;
  //
  // $box1 = 1;
  // var_dump($box1);
  //
  // $box2 = 1.0;
  // var_dump($box2);
  //
  // $box3 = "Hello, World";
  // var_dump($box3);
  //
  // $box4 = true;
  // var_dump($box4);


  // echo "あ<br />いうえお";
  //
  // echo '<p class=\"apple\">クラス名appleのp要素</p>';
  // echo "<p class=\"apple\">クラス名appleのp要素</p>";
  //
  // define('APPLE', 'りんご');
  // echo APPLE;
  //
  // const ORANGE = 'オレンジ';
  // echo ORANGE;

  // $int = 10;
  //
  // if( is_int( $int ) ) {
  //   echo '$int[' . $int . ']は整数型です'; // 整数であれば表示される
  // }
  //
  // $float = 3.14;
  //
  // if( is_float( $float ) ) {
  //   echo '$float[' . $float . ']は浮動小数点数型です';
  // }

  // $alcohol = 'ビール';
  //
  // echo "$alcoholが飲みたい!"
  // echo '$alcoholがのみたい'

  // $alcohol = 'ビール'; // $alcoholという変数に“ビール”という文字を代入。
  //
  // echo "{$alcohol}が''飲みたい!"; // ビールが飲みたい!   と表示される。
  // echo '$alcoholが飲みたい!'; // $alcoholが飲みたい! と表示される。
  //
  //
  // $str = 'PHPの学習';
  //
  // if( is_string( $str ) )
  // {
  //   echo $str;  // PHPの学習 と表示される。
  // }

  // $alcohol['beer'] = 'ビール';
  // $alcohol += array('spirit'=>'焼酎', 'sour'=>'サワー');
  //
  // foreach( $alcohol as $key => $value ) {
  //
  //   echo $key . 'は' . $value . 'ですね<br />';
  // }


    // $alcohol = array('ビール', '焼酎', 'サワー');
    //
    // foreach( $alcohol as $value ) {
      //     echo $value . 'が飲みたい！<br />';
      // }

      // $alcohol = array('ビール', '焼酎', 'サワー');
      //
    	// if( is_array( $alcohol ) ) {
      //   	echo '$alcoholは配列です'; // 配列であれば表示される
    	// }




//   class alcohol {
//     public $_kind = " "; //プロパティ
//     public function __construct( $kind )
//     { //コンストラクタ
//       $this->_kind = $kind; //プロパティに$kindを代入
//     }
//
//     public function getKind()
//     {
//       return $this->_kind; //メソッドが呼ばれたら、プロパティを返す
//     }
//   }
//
//   $bourbon = new alcohol('バーボン');
//
//   echo $bourbon->_kind;
//   echo $bourbon->getKind();
//
//   $cocktail = new alcohol('カクテル');
//
//   echo $cocktail->getKind(); //カクテルと表示される
//
// if(is_object($bourbon)){
//   echo "オブジェクトです";
// }
//
//
// 	$arr = array('apple', 'orange');
// 	var_dump($arr);
//   $arr[] = "grapes";
//   var_dump($arr);
//


  //配列の中身を確認する。エラーログに吐き出して確認できる
  // error_log(print_r($arr, true));



  // $arr = [];
  // $arr[4] = "apple";
  //
  // var_dump($arr);
  // error_log(print_r($arr,true));
  //
  // $arr[] = "orange";
  // var_dump($arr);
  // error_log(print_r($arr, true));
  //
  //

// $arr = ["apple", "aaa"];
// echo $arr[0];
// error_log(print_r($arr, true));
// $arr["0"] = "orange";
//
// echo $arr[0];
// error_log(print_r($arr, true));

// $a["html"] = "WEBページ";
//  $a["css"] = "レイアウト・装飾";
//  $a["javascript"] = "動的ページ";
//  $a["PHP"] = "サーバーサイドプログラム";
//  $a["MySQL"] = "データベース";
//  print_r($a);
//  echo $a["PHP"];
//  error_log(print_r($a, true));
// error_log(print_r($a["PHP"], true));


// $a = array("html"=>"webページ", "css"=>"レイアウト・装飾", "javascript"=>"動的ページ", "PHP" => "サーバーサイドプログラム", "MySQL" => "データベース");
// error_log(print_r($a, true));

// $a["html"] = "WEBページ";
//   $a[1] = "数値キー1";
//   $a["css"] = "レイアウト・装飾";
//   $a["javascript"] = "動的ページ";
//   $a["PHP"] = "サーバーサイドプログラム";
//   $a[0] = "数値キー0";
//   $a["MySQL"] = "データベース";
//   print_r($a);
//   error_log(print_r($a, true));
//
// $num = 1000;
// echo "みかんを". $num ."個ください";
// error_log(print_r("みかんを".$num."個ください", true));
//
// echo "マラソンは". 42.195 ."km走ります";
// error_log(print_r("マラソンは". 42.195 ."km走ります", true));
//
//
// $int = 1; // 数値の1
//   $str = "1"; // 文字列の1
//
//   // !=の場合の比較
//   if( $int != $str ){
//     echo "TRUE\n";
//   } else {
//     echo "FALSE\n";
//   }
//
//   // !==の場合の比較
//   if( $int !== $str ){
//     echo "TRUE\n";
//   } else {
//     echo "FALSE\n";
//   }


//xor排他的論理和
// $x = 5;
//   if( $x > 1 xor $x < 10 ) {
//     echo "TRUE\n";
//   } else {
//     echo "FALSE\n";
//   }

// $x = 5;
//   if( $x > 6 xor $x < 10 ) {
//     echo "TRUE\n";
//   } else {
//     echo "FALSE\n";
//   }

// $x = 5;
//   if( $x > 1 xor $x < 4 ) {
//     echo "TRUE\n";
//   } else {
//     echo "FALSE\n";
//   }


// $x = true;
//   $y = false;
//
//   $x = !$x;
//   $y = !$y;
//
//   var_dump($x);
//   var_dump($y);


// $box = null;
//
//   if( $box ){
//     echo "中身あるね \n";
//   } else {
//     echo "中身ないね \n";
//   }



//メンバー情報一覧
//   $member = "";
//   $member_num = 10;
//
//   for($i = 1; $i <= $member_num; $i++){
//     $member .= "<tr><td>$i</td><td>メンバー" . $i . "</td><td>ID" . $i . "</td><td>PASS" . $i . "</td></tr>";
//   }
//
//
// //HTML書き出し
// $str = <<<EOD
// <meta charset="UTF-8">
// <title>PHPの学習</title>
// <meta name="description" content="このページはPHPを学習するページです">
// <meta name="keywords" content="PHP,学習,タグ,ページ">
// <link rel="stylesheet" href="css/sample.css">
//
// <!--[if lt IE 9]>
// <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
// <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
// <![endif]-->
// <script src="sample.js"></script>
// </head>
// <body>
// 	<table>
// 		<tr><th>no.</th><th>名前</th><th>ID</th><th>PASS</th></tr>
// 		$member
// 	</table>
// </body>
// EOD;
// echo $str;
//
//
// $a = ["A"=>"配列の0番目", "B"=>"配列の1番目", "C"=>"配列の2番目","D"=>"配列の3番目","E"=>"配列の4番目",];
//   foreach ( $a as $key => $value) {
//     echo $key ."=". $value ."<br>";
//   }
//
//
// for( $i = 0; $i < 5; $i++ ){
//     for( $j = 0; $j < 5; $j++ ){
//       if( $i === 3 ){
//         echo "条件を満たしたので階層1のループを抜ける<br>";
//         break 2;
//       }
//       echo $i . $j . "<br>";
//       error_log(print_r($i . $j . "<br>", true));
//     }
//   }


// $str = "Good";
// function hw( $x = "Hello"){
//     $x .= ", World<br>";
//     return $x;
//   }
//
//   echo hw($str);

// function local() {
//     $var_local = "Hello ";
//
//     // グローバル変数の参照宣言
//     global $var_global;
//
//     echo $var_local . $var_global ."<br />";
//   }
//
//   $var_global = "World";
//
//   // 関数の呼び出し
//   local();
// local();local();

//=====================================================================
//------------ オブジェクト指向とか -----------------------------------

// class Message {
//   static function hello(){
//     return "こんにちは";
//   }
//   static function bye(){
//     return "さようなら";
//   }
// }
//
// // $message1 = Message::hello();
// $message1 = Message::hello();
// $message2 = Message::bye();
//
// echo "変数message1の内容は{$message1}、変数message2の内容は{$message2}です。"


// class MyMember {
//   private $name;
//
//   function setName($name) {
//     $this->name = $name;
//   }
//   function getName() {
//     return $this->name;
//   }
// }
//
// class MyMember2 extends MyMember {
//   private $addr;
//
//   function setAddr($addr) {
//     $this->addr = $addr;
//   }
//   function getAddr() {
//     return $this->addr;
//   }
// }
//
// $foo = new MyMember2();
// $foo->setName("Tanaka");
// $foo->setAddr("Tokyo");
// echo "name = {$foo->getName()}\n";
// echo "addr = {$foo->getAddr()}\n";


// class MyMath {
//   const PI = 3.14;
// }
//
// echo MyMath::PI;

// class MyMath {
//   public static $debug_level = 0;
//   const PI = 3.14;
//   public static function add($x, $y) {
//     return $x + $y;
//   }
//   function test() {
//     echo self::PI. "\n";
//     echo self::$debug_level. "\n";
//     echo self::add(3, 5). "\n";
//   }
// }
// echo MyMath::PI. "\n";
// echo MyMath::$debug_level. "\n";
// echo MyMath::add(3, 5). "\n";

// class MyClass1 {
//   function func1() {echo "func1()\n";}
// }
//
// class MyClass2 extends MyClass1 {
//   function func2() {parent::func1();}
// }
//
// $a = new MyClass2();
// $a->func2();

//親クラス
// class Oya {
//   function func1() {
//     echo $this->var;
//     echo $this->pub;
//     echo $this->pro;
//     # echo $this->pri //アクセスできない
//   }
// }
//
// class Child extends Oya {
//   var $var = "var\n";
//   public $pub = "public\n";
//   protected $pro = "protected\n";
//   private $pri = "private\n";
//
//   function func2(){
//     echo $this->var;
//     echo $this->pub;
//     echo $this->pro;
//     echo $this->pri;
//   }
// }
//
// class Mago extends Child {
//   function func3() {
//     echo $this->var;
//     echo $this->pub;
//     echo $this->pro;
//     # echo $this->pri; //アクセスできない
//   }
// }
//
// $obj  = new Mago();
// $obj->func1();
// $obj->func2();
// $obj->func3();
//
// echo $obj->var;
// echo $obj->pub;
// echo $obj->pro; //アクセスできない
// # echo $obj->pub;


// class MyClass {
//   function __construct() {
//     echo "Constructer of 親だよ\n";
//   }
//   function __destruct() {
//     echo "親クラスが消滅\n";
//   }
//   final public function func() {
//     echo "オーバーライド禁止してるよ\n";
//   }
// }
//
// class MyClass2 extends MyClass {
//   function __construct() {
//     parent::__construct();
//     echo "子のコンストラクタ";
//   }
//   function __destruct() {
//     parent::__destruct();
//     echo "子クラスが消滅\n";
//   }
//   // public function func() {
//   //   echo "子でオーバーライドしたよ";
//   // }
// }
//
// $obj = new MyClass2();
// $obj->func();
// unset($obj);


//------ 抽象クラス -----------------------------------------------------------
// abstract class MyFileReader { //抽象クラスとして定義
//   protected $file_name;
//   protected $fp;
//   function __construct($file) {
//     //初期化処理(ファイルのオープンなど)
//   }
//   abstract public function read(); //一つ以上の抽象メソッドを定義
//   function close() {
//     // ファイルのクローズ処理
//   }
// }
//
// class MyCsvFileReader extends MyFileReader {
//   public function read() { //抽象メソッドを具現化
//     // CSVファイル読み込み処理
//   }
// }
//
// class MyXmlFileReader extends MyFileReader {
//   public function read(){ //抽象メソッドを具現化
//     // XMLファイル読み込み処理
//   }
// }
//
// $fr = new MyCsvFileReader("sample.csv");
// $csv = $fr->read();
// $fr->close();


// interface MyFileReader { //インタフェースとして定義
//   public function read(); //クラスが実装すべきメソッドを定義
// }
//
// class MyCsvFileReader implements MyFileReader {
//   public function read() { //メソッドを具現化
//     //CSVファイル読み込み処理
//   }
// }
//
// class MyXmlFileReader implements MyFileReader {
//   public function read() { //メソッドを具現化
//     //XMLファイル読み込み処理
//   }
// }
//
// $fr = new MyCsvFilereader("sample.csv");
// $csv = $fr->read();
// $fr->close();


// class MyClass1 {
//   public function greet() {echo "Hello\n";}
// }
//
// class MyClass2 {
//   public function greet() {echo "Guten Tag\n";}
// }
//
// class MyClass3 {
//   public function test(MyClass1 $obj) {
//     $obj->greet();
//   }
// }
//
// $obj1 = new MyClass1();
// $obj2 = new MyClass2();
// $obj3 = new MyClass3();
//
// $obj3->test($obj1); //型が合っているので呼び出せる。インスタンスを引数に入れている
// // $obj3->test($obj2); //型が合っていないのでエラーとなる

//クラスファイルがあったら読み込む
// function __autoload($class_name) {
//   include("{$class_name}.php");
// }
//
// $obj = new MyClass1();

// class MyClass{public $name;}
//
// $obj1 = new MyClass();
// $obj1->name = "AAA";
//
// $obj2 = $obj1; //$obj2はobj1と同じオブジェクトを示す
// $obj2->name = "BBB";
//
// echo $obj1->name . "\n"; //BBBと表示される
// echo $obj2->name . "\n"; //BBBと表示される


// class MyClass {public $name;}
//
// $obj1 = new MyClass();
// $obj1->name = "AAA";
//
// $obj2 = clone $obj1; //obj1とは別のオブジェクトが生成される
// $obj2->name = "BBB";
//
// echo $obj1->name . "\n";
// echo $obj2->name . "\n";



// func("AAA", "BBB", "CCC");
// function func() {
//     for ($i = 0; $i < func_num_args(); $i++) {
//         echo "$i : " . func_get_arg($i) . "\n";
//     }
//
//     foreach (func_get_args() as $arg) {
//         echo "$arg\n";
//     }
// }

//無名関数
//関数名を指定するケース
// function func($n) {
//   return $n * 2;
// }
// print_r(array_map("func", array(1,2,3)));

//無名関数を代入した変数を指定するケース
// $func = function($n){
//   return $n * 2;
// };
// print_r(array_map($func, array(1,2,3)));


//無名関数を直接指定するケース
// print_r(array_map(function($n) {
//   return $n * 2;
// },array(1,2,3)));


// function outer(){
//     function inner(){
//         echo "aaa";
//     }
//     inner();  //←コレ
// }
//
// outer();
















      ?>

    </body>
    </html>
