<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$sub = $_POST['user_subject'];
$txt = $_POST['user_txt'];

$mail->isSMTP();                                     
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                             
$mail->Username = 'lillaley@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'abzhik0505'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl'; 
$mail->Port = 465; //этот порт может отличаться у других провайдеров

$mail->setFrom('lillaley@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('lillaley@mail.ru');     // Кому будет уходить письмо 
$mail->isHTML(true);                     

$mail->Subject = 'Заявка';
$mail->Body    = '' .$name . ' этот чел отправил, его телефон ' .$phone. '<br>Тема жалобы: ' .$sub. '<br>Сама жалоба: ' .$txt;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: Contact.html');
}
?>