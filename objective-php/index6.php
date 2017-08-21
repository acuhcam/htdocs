<?PHP

class PriceFormatter{
  public static function formatJapanese($price){
    $price = number_format($price);
    $price = $price ."円";
    return $price;
  }

  public static function formatBasic($price){
    $price = number_format($price);
    $price = "\\". $price ."<br />";
    return $price;
  }
}

$price = PriceFormatter::formatBasic(2000);
echo $price;

$price = PriceFormatter::formatJapanese(3000);
echo $price;









?>
