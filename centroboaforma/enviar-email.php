<?php
// Recebendo dados do formulário
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$headers = "Content-Type: text/plain;charset=utf-8\r\n";
$headers .= "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Dados que serão enviados
$corpo = "Formulário da página de contato\r\n";
$corpo .= "Nome: " . $name . "\r\n";
$corpo .= "Email: " . $email . "\r\n";
$corpo .= "Mensagem: " . $message . "\r\n";

// Email que receberá a mensagem (Não se esqueça de substituir)
$email_to = 'contato@centroboaforma.com.br';

// Enviando email
$status = mail($email_to, mb_encode_mimeheader($subject, "utf-8"), $corpo, $headers);

if ($status):
  // Enviada com sucesso
  header('location:index.php?status=sucesso');
else:
  // Se der erro
  header('location:index.php?status=erro');
endif;
?>