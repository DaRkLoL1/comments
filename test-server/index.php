<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");

  if($_SERVER['REQUEST_METHOD'] === 'GET') {
    $json = file_get_contents('./data.json');
    echo $json;
  }

  if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postData = json_decode(file_get_contents('php://input'));
    $comments = json_decode(file_get_contents('./data.json'));

    $lastIndex = end($comments)->id;
    $postData->id = $lastIndex + 1;
    $comments[] = $postData;
    file_put_contents('./data.json', json_encode($comments));
    echo json_encode($postData);
  }