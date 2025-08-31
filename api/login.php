<?php
// login.php
header('Content-Type: application/json');
$user = $_POST['user'] ?? '';
$pass = $_POST['pass'] ?? '';
if ($user === 'admin' && $pass === '123456') {
    echo json_encode(['success' => true]);
} else {
    http_response_code(401);
    echo json_encode(['success' => false]);
}
