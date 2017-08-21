<?PHP

// class Product {
//   public $name;
// }

class Product {
  private $name;
  private $price;
  private $productDate; //製造日、読み取り専用にしたい

  public function __construct($price, $date){
    if(false == $this->checkPrice($price)){
      throw new Exception("価格の設定値が不正です");
    }
    $this->price = $price;

    //製造日はコンストラクタでのみ設定
    $this->productDate = $date;
  }

  public function adjustPrice($price){
    if(false == $this->checkPrice($price)){
      throw new Exception("価格の設定が不正です");
    }
    $this->price = $price;
  }

  //ゲッタのみ定義し、セッタは設けない
  public function getProductDate(){
    return $this->productDate;
  }

  private function checkPrice($count){
    if(false == id_numeric($count)){
      return false;
    }
    return true;
  }


  // public function setName($name){
  //   $this->name = $name;
  // }
  //
  // public function getName(){
  //   if($this->name == ""){
  //     return "名無し";
  //   } else {
  //     return $this->name;
  //   }
  // }
  //
  // public function getPrice(){
  //   return $this->price;
  // }
  //
  // public function setPrice($price){
  //   if(false == is_numeric($price)){
  //     throw new Exception("価格の設定値が不正です");
  //   }
  //   $this->price = $price;
  // }
}

// try {
//   $prd = new Product();
//
//   $prd->setPrice(100);
//   echo $prd->getPrice() ."円です。";
//
//   $prd->setPrice("ばか");
//   echo $prd->getPrice() ."円です。";
// } catch (Exception $e){
//   echo $e->getMessage();
// }



// $prd = new Product();
// $prd->setName("かまぼこ");
//
// echo $prd->getName() ."と命名した";
// echo $prd->getName() ."のラベルに「". $prd->getName() ."」と書いた";









?>
