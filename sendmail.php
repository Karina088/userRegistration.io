<?php

use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

require 'phpmailer/scr/Exception.php';
require 'phpmailer/scr/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

// от кого письмо
$mail->setFrom('morskya.life@gmail.com', 'Kary');
// кому отправить
$mail->addAddress('vurosov@gmail.com');
//тема письма
$mail->Subject = 'Привет! Это тест письмо';

// тело письма
$body = '<h3>Кто двинется, тот гей</h3>';

if (trim(!empty(['name']))) {
    $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p>';
}
if (trim(!empty(['email']))) {
    $body .= '<p><strong>E-mail:</strong> ' . $_POST['email'] . '</p>';
}
if (trim(!empty(['message']))) {
    $body .= '<p><strong>Сообщение:</strong> ' . $_POST['message'] . '</p>';
}

// прикрепить файл 
if (!empty($_FILES['image']['tmp_name'])) {
    // путь загрузки файла
    $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
    //гружу файл
    if (copy($_FILES['image']['tmp_name'], $filePath)) {
        $fileAttach = $filePath;
        $body .= '<p><strong>Фото в приложении</strong>';
        $mail->addAttachment($fileAttach);
    }
}

$mail->Body = $body;

//отправляю 
if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}

$response = ['mesage' => $message];

header('Content-Type: application/json');
echo json_encode($response);
