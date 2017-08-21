<?php


//処理所要時間測定クラス
abstract class TimeMeasure {
  abstract protected function process();

  //このexecでやっていることは、processメソッド実行の前後でミリ秒単位の時間を取得し、その差を求めています。つまり、processメソッド内の処理にどれだけ時間がかかったかを計測するのです。
  //仕組みとしてはこの抽象クラスを継承し、processメソッドをオーバーライドして処理を実装するだけです。そしてこのクラスのインスタンスを生成してexecメソッドを実行すれば、processメソッド内の処理にどれだけの時間を要したかがわかる仕組みです。


  public function exec()
  {
    $startTime = $this->getMicrotime();
    $this->process();
    $endTime = $this->getMicrotime();
    $procSecs = $endTime - $startTime;
    echo sprintf("処理所要時間は%s秒でした", $procSecs);
  }

  private function getMicrotime()
  {
    $splitedMt = explode(' ', microtime());
    return $splitedMt[0] + $splitedMt[1];
  }
}

//   public function exec()
//     {
//         $startTime = $this->getMicrotime();
//         $this->process();
//         $endTime = $this->getMicrotime();
//         $procSecs = $endTime - $startTime;
//         echo sprintf('処理所要時間は%s秒でした。', $procSecs);
//     }
//
//     private function getMicrotime()
//     {
//         $splitedMt = explode(' ', microtime());
//         return $splitedMt[0] + $splitedMt[1];
//     }
// }

class TestClass1 extends TimeMeasure {
  protected function process(){
    for($i = 0; $i < 1000000; $i++){
      $str .= 1;
    }
  }
}

class TestClass2 extends TimeMeasure {
  protected function process(){
    for($i = 0; $i < 1000000; $i++){
      $str .= "1";
    }
  }
}

$test1 = new TestClass1();
$test1->exec();

$test2 = new TestClass2();
$test2->exec();




 ?>
