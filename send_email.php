<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'biuro.kreatorzykrajobrazu@gmail.com'; // Zmień na swój adres e-mail biuro.kreatorzykrajobrazu@gmail.com
    $subject = 'Wiadomość z formularza kontaktowego';
    $body = "Imię: $name\nNazwisko: $surname\nEmail: $email\nWiadomość:\n$message";
    $headers = 'From: ' . $email;

    if (mail($to, $subject, $body, $headers)) {
        echo 'Wiadomość została wysłana.';
    } else {
        echo 'Wystąpił błąd podczas wysyłania wiadomości.';
    }
}
?>