<?php
//クラス定数は必ずpublic

class Product {
  //税率
  const TAX_RATE = 0.05;

  //金額
  private $price = 0;

  //価格設定
  public function setPrice($price){
    $this->price = $price;
  }

  //税込価格取得
  public function getSalePrice(){
    //定数をクラス内で参照
    $tax = $this->price * self::TAX_RATE;
    $price = $this->price + $tax;
    return $price;
  }
}

//定数クラス外から参照
var_dump(Product::TAX_RATE);

$prd = new Product();
$prd->setPrice(100);
$price = $prd->getSalePrice();

var_dump($price);





class Sex {
  const MAN = 1;
  const WOMAN = 2;
}

class Person {
  private $name;
  private $sex;

  public function __construct($name, $sex){
    $this->name = $name;
    $this->sex = $sex;
  }

  public function scream(){
    if(Sex::MAN == $this->sex){
      return "グワアアア";
    } else if(Sex::WOMAN == $this->sex){
      return "キャアアア";
    } else {
      "性別がおかしいです";
    }
  }
}

$person = new Person("花子", Sex::WOMAN);
var_dump($person->scream());

//処理ステータス
class ProcStatus {
  const OK = 1; //正常終了
  const NG = 2; //以上終了
  const ONPROC = 3; //処理中
}

//処理準備状態
class ProcReadyStatus {
  const OK = 0; //準備OK
  const NG = 1; //準備中
}








 ?>
