<?php


interface IProduct
{
  public function applyPriceDown();

  public function getPrice();

}





//野菜クラス
class Begetable implements IProduct {
  private $price = 1000;

  public function applyPriceDown()
  {
    //常に3割引
    $this->price = $this->price * 0.7;
  }

  public function getPrice()
  {
    return $this->price;
  }
}

//肉クラス
class Meet implements IProduct {
  private $price = 1000;

  public function applyPriceDown()
  {
    if("29" == date("d")){
      //29日なら半額
      $this->price = $this->price / 2;
    }
  }

  public function getPrice()
  {
    return $this->price;
  }
}

//冷凍食品クラス
class FreezedFood implements IProduct {
  private $price = 500;

  public function applyPriceDown()
  {
    //値引きなし
  }

  public function getPrice()
  {
    return $this->price;
  }
}

//カート
class Cart
{
  //商品インスタンス保持用配列
  private $products = array();

  //商品追加
  public function addProduct($product)
  {
    $product->applyPriceDown();
    $this->products[] = $product;
  }

  //商品の合計価格取得
  public function getTotalPrice()
  {
    $total = 0;
    foreach($this->products as $product){
      $total += $product->getPrice();
    }
    return $total;
  }
}

//カート@
$cart = new Cart();

//商品@
$meet = new Meet();
$begetable = new Begetable();
$freezed = new FreezedFood();

//カートにm商品追加
$cart->addProduct($meet);
$cart->addProduct($begetable);
$cart->addProduct($freezed);

//現在の合計価格を取得@
$total = $cart->getTotalPrice();

var_dump($total);




 ?>
