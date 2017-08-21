<?php
//構文
//基本的には明示的にthrowしない限りはtry～catchの意味はありません。
// try {
//   throw new Exception("エラーが発生しました");
// } catch(Exception $e) {
// }

class Calc
{
  public static function division($int1, $int2)
  {
    try {
      if($int2 == 0) {
        throw new Exception("0で割ろうとしました");
      }
      $answer = $int1 / $int2;
      echo $answer;
      echo "割り算が終了しました";
    } catch (Exception $e) {
      echo $e->getMessage();
      echo "割り算が異常終了しました";
    }
  }
}

Calc::division(10, 2);
Calc::division(10, 0);



//また、PHPの標準関数を直接使わないってのも手です。標準関数が投げてくれないなら自分で投げるようにするんです。つまり、標準関数をラップしたようなクラスを作って、エラーになりそうな可能性を全て想定して例外を投げるんです。

//本来、fopen関数を使ってファイルをオープンするところを、ileクラスのreadメソッドを代わりに使用しています。なので、Fileクラスは標準関数クラスというような位置づけであらかじめ作っておくのです。

class File
{
  public static function read($path)
  {
    if(false === file_exists($path)) {
      throw new Exception("ファイルが存在しません");
    }
    $fp = @fopen($path, "r");
    if(false === $fp) {
      throw new Exception("ファイルオープンに失敗しました");
    }
    $data = @stream_get_contents($fp);
    if(false === $fp) {
      throw new Exception("ファイルの読み込みに失敗しました");
    }
    return $data;
  }
}

class StringViewer
{
  public function display($path)
  {
    try {
      $data = File::read($path);
      echo $data;
    } catch(Exception $e) {
      die($e->getMessage());
    }
  }
}

$viewer = new StringViewer();
$viewer->display("C:/aa.txt");


 ?>
