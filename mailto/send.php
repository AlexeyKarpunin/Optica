<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$type_build = $_POST['type_build'];
$target_build = $_POST['target_build'];

// Сообщение
$message = "Имя: ".$name."\r\nТелефон: ".$phone."\r\nТип строения: ".$type_build."\r\nНазначение: ".$target_build;

// На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
$message = wordwrap($message, 70, "\r\n");

// Отправляем

// mail('rop@fabricant.ru, makarovt_t@mail.ru', 'My Subject', $message);
mail('mr.offlain@mail.ru', 'My Subject', $message);
function goback()
{
    header("Location: {$_SERVER['HTTP_REFERER']}");
    exit;
}
  

goback();

    // $to = "mr.offlain@mail.ru";
    // $subject = "Письмо с сайта";
    // $charset = "utf-8";
    // $headerss ="Content-type: text/html; charset=$charset\r\n";
    // $headerss.="MIME-Version: 1.0\r\n";
    // $headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";
    // $msg = "Имя: ".$_POST["name"]."\n";$msg .= "Сообщение: ".$_POST["msg"]."\n";
    // mail($to, $subject, $msg, $headerss);
    // print "<script>alert(\"Сообщение успешно отправлено!\");window.location = window.location.href</script>";

?>
