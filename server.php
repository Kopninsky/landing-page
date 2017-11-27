<?php
$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$street = $_POST['street'];
$home = $_POST['home'];
$part = $_POST['part'];
$flat = $_POST['flat'];
$floor = $_POST['floor'];
$comment = $_POST['comment'];
$payOption = $_POST['pay-option'];
$disturb = $_POST['dont-disturb'];
$disturb = isset($disturb) ? 'НЕТ' : 'ДА';

$mail_message = '
<html>
    <head>
        <title>Уведомление о заказе</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя: ' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Дом:  ' . $home . '</li>
            <li>Корпус:  ' . $part . '</li>
            <li>Квартира:  ' . $flat . '</li>
            <li>Этаж:  ' . $floor . '</li>
            <li>Комментарий: ' . $comment . '</li>
            <li>Способ оплаты: ' . $payOption . '</li>
            <li>Комментарии к заказу: ' . $message . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>
    </body>
</html>    
';

$headers = "From: MySelf\r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('kopninsky@gmail.com', 'Заказ', $mail_message, $headers);

$data = [];

if ($mail) {
    $data['status'] = "OK";
    $data['mes'] = "принят";
}else{
    $data['status'] = "NO";
    $data['mes'] = "не принят";
}

echo json_encode($data);
?>