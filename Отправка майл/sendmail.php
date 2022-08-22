<?php
require_once('send_mail.php');

$mailTo = 'regress.renessansa@bk.ru'; // кому
$subject = $_POST['subject']; // тема письма
$message = $_POST['message']; // текст письма
$from = 'info@мой домен с хостинга.site'; // от кого
$file = $_FILES['file']; // файл
sendMailAttachment($mailTo, $from, $subject, $message, $file); // отправка письма c вложением
?>