<?php

  // echo $_SERVER['SERVER_NAME']; //サーバー名がわかる関数

  //PDO接続する関数
  function dbConnect(){
    global $host, $dbname, $user, $pass, $dns, $e;
    if($_SERVER['SERVER_NAME'] === 'localhost')
    {
      $host="localhost";
      $dbname="test";
      $dns = "mysql:host=". $host ."; dbname=". $dbname ."; charset=utf8";
      $user="root";
      $pass="kappanotakezou";
    }
    else
    {
      $host="mysql2004.xserver.jp";
      $dbname="respawn_school";
      $dns = "mysql:host=". $host ."; dbname=". $dbname ."; charset=utf8";
      $pass="h108ilIG";
    }

    try
    {
      $pdo = new PDO($dns, $user, $pass);
    } catch (PDOException $e)
    {
      //var_bump($e->getMessage());
      echo $e->getMessage();
      exit;
    }



  }







 ?>
