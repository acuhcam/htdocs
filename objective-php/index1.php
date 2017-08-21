<?PHP


class Product {
  private $name; //商品名
  private $price = 0; //価格

  //商品名を取得する
  public function getName(){
    return $this->name;
  }

  //商品名を設定する
  public function setName($name){
    $this->name = $name;
  }

  public function getPrice(){
    return $this->price;
  }

  public function setPrice($price){
    $this->price = $price;
  }


}

//インスタンス生成
$product = new Product();

//商品名を設定
$product->setName("かまぼこ");

//商品名を取得
$productName = $product->getName();

var_dump($productName);


class Prius {
  private $mileage = 0; //走行距離

  //走行する
  public function drive($distance){
    //走った距離分、走行距離を加算
    $this->mileage += $distance;
  }

  //走行距離を取得
  public function getMileage(){
    return $this->mileage;
  }
}

//2台のプリウスのインスタンスを生成
$prius1 = new Prius();
$prius2 = new Prius();

//プリウス1だけ走行してみる
$prius1->drive(5);

//両方のプリウスの走行距離を取得する
$mileage1 = $prius1->getMileage();
$mileage2 = $prius2->getMileage();

print "プリウス1は". $mileage1 . "km走りました";
print "プリウス2は". $mileage2 . "km走りました";



function sampleFunc(&$price){
  $price = 80;
}

$price = 100;
echo "初期状態 : ". $price;

sampleFunc($price);
echo "値渡し後 : ". $price;

// sampleFunc(&$price);
sampleFunc($price);
echo "参照渡し後 : ". $price;


$product2 = new Product();
$product2->setPrice(100);
echo $product2->getPrice();

// sampleFunc(clone $product2);
// echo $product->getPrice();



?>
