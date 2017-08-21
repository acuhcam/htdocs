<?PHP

class Product {
  protected $price;
  protected $discountRate = 0.03;

  //価格取得
  public function getPrice(){
    $price = $this->price - ($this->price * $this->discountRate);
    return $price;
  }

  //価格設定
  public function setPrice($price){
    $this->price = $price;
  }
}


class FoodProduct extends Product {
  private $expire = 15;

  //残りの正味期限を取得
  public function getExpire(){
    return $this->expire;
  }

  //残りの正味期限を1減らす
  public function decrementExpire(){
    $this->expire--; //デクリメント
    return $this->getExpire();
  }

  //価格取得のオーバーライド
  public function getPrice(){
    //親クラスのgetPrice()を呼び出し
    $price = parent::getPrice();
    if($this->expire <= 10){
      //残りの賞味期限が10日以下になったら半額
      $price = $price / 2;
    }
    return $price;
  }
}

$prd = new FoodProduct();

//価格を100に設定
$prd->setPrice(100);

//賞味期限残日数が0になるまで繰り返し
$expire = $prd->getExpire();
while($expire > 0){
  $expire = $prd->decrementExpire();
  echo "正味期限残 : ". $expire ."日 価格 : ". $prd->getPrice();

}












?>
