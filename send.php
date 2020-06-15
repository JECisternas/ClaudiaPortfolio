<?php

$names = $_POST['names'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$receiver = "jcr_mw@yahoo.com";
$subject = "Portfolio";
$letter = "From: $names \n";
$letter .= "Email: $email \n";
$letter .= "Phone: $phone \n";
$letter .= "Message: $message";

mail($receiver, $subject, $letter);
header('Location:message_sent.html');

?>