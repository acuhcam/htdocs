<?PHP

class Product {
  protected $name; //商品名
  protected $price; //価格

  //コンストラクタ
  public function __construct($name){
    $this->name = $name;
  }

  //価格を取得
  public function getPrice(){
    return $this->price;
  }

  //価格を設定
  public function setPrice($price){
    $this->price = $price;
  }
}

class FoodProduct extends Product {
  private $expire; //賞味期限日数

  public function setExpire($expire){
    $this->expire = $expire;
  }

  public function getExpire(){
    return $this->expire;
  }
}

$food = new FoodProduct("肉");

$food->setPrice(100);
echo "価格を". $food->getPrice() ."円に設定しました。";

$food->setExpire(30);
echo "賞味期限を". $food->getExpire() ."日に設定しました。";











?>
