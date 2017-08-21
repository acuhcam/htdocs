<?php

//ポリモーフィズムなり

// 商品クラス
class Product
{
    const VEGETABLE = 'vegetable';
    const MEET = 'meet';
    const FREEZED = 'freezed';

    private $prices = array(
        self::VEGETABLE => 1000,
        self::MEET => 2000,
        self::FREEZED => 500,
    );

    private $productType;

    public function __construct($productType)
    {
        $this->productType = $productType;
    }

    public function applyPriceDown()
    {
        switch ($this->productType) {
            case self::VEGETABLE:
                // 常に3割引
                $this->price = $this->price * 0.7;
                break;
            case self::MEET:
                // 29日なら半額
                if ('29' == date('d')) {
                    $this->price = $this->price / 2;
                }
                break;
        }
    }
}

// カートクラス
class Cart
{
    // 商品インスタンス保持用配列
    private $products = array();

    // 商品追加
    public function addProduct($product)
    {
        $product->applyPriceDown();
        $this->products[] = $product;
    }
}

$vegetable = new Product(Product::VEGETABLE);
$meet = new Product(Product::MEET);
$freezed = new Product(Product::FREEZED);

$cart = new Cart();
$cart->addProduct($vegetable);
$cart->addProduct($meet);
$cart->addProduct($freezed);





//ポリモーフィズムあり

// 商品インターフェイス
interface IProduct
{
    public function applyPriceDown();
}

// 野菜クラス
class Begetable implements IProduct
{
    private $price = 1000;

    public function applyPriceDown()
    {
        // 常に3割引
        $this->price = $this->price * 0.7;
    }
}

// 肉クラス
class Meet implements IProduct
{
    private $price = 2000;

    public function applyPriceDown()
    {
        if ('29' == date('d')) {
            // 29日なら半額
            $this->price = $this->price / 2;
        }
    }
}

// 冷凍食品クラス
class FreezedFood implements IProduct
{
    private $price = 500;

    public function applyPriceDown()
    {
        // 値引きなし
    }
}

// カートクラス
class Cart
{
    // 商品インスタンス保持用配列
    private $products = array();

    // 商品追加
    public function addProduct($product)
    {
        $product->applyPriceDown();
        $this->products[] = $product;
    }
}

$vegetable = new Vegetable();
$meet = new Meet();
$freezed = new FreezedFood();

$cart = new Cart();
$cart->addProduct($vegetable);
$cart->addProduct($meet);
$cart->addProduct($freezed);







 ?>
