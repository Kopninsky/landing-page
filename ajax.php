<?php

    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $street = $_POST['street'];
    $home = $_POST['home'];
    $part = $_POST['part'];
    $flat = $_POST['flat'];
    $floor = $_POST['floor'];
    $comment = $_POST['comment'];
    $pay = $_POST['pay-option'];

    $callback = $_POST['callback']; // 1 или null 
    $callback= isset($callback) ? 'НЕТ' : 'ДА'; 

    $mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>Телефон: ' . $phone . '</li>
                <li>Улица: ' . $street . '</li>
                <li>Дом: ' . $home . '</li>
                <li>Корпус: ' . $part . '</li>
                <li>Квартира: ' . $flat . '</li>
                <li>Этаж: ' . $floor . '</li>
                <li>Способ оплаты: ' . $pay . '</li>
                <li>Комментарии к заказу: ' . $comment . '</li>
                <li>Нужно ли перезванивать клиенту: ' . $callback . '</li>
            </ul>
        </body>
    </html>    
    ';

    $headers = "From: Mr Burger\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('kopninsky@gmail.com', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Заказ успешно отпрален";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);


?>