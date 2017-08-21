<?php

require_once "./Counter.php";

//カウンタークラスインスタンス生成
$counter = new Counter();
//カウンターを加算
$counter->increment();
//カウンター値取得
$cnt = $counter->get();
 ?>


 <html>
   <head>
     <meta charset="utf-8">
     <title>PHP講座トップページ</title>
   </head>
   <body>
     <h1>PHP講座</h1>
     <p>あなたは<?php echo $cnt; ?>番目の訪問者です</p>
   </body>
 </html>
