<?php
// cars_json.php
header('Content-Type: application/json');
$path1 = __DIR__ . '/../public/data/cars.json';
$path2 = __DIR__ . '/../data/cars.json';
$path = file_exists($path1) ? $path1 : $path2;

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (!file_exists($path)) {
        echo json_encode([]);
        exit;
    }
    echo file_get_contents($path);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    if (!is_array($data)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Dados inválidos']);
        exit;
    }
    file_put_contents($path, json_encode($data, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE));
    echo json_encode(['success' => true]);
    exit;
}

http_response_code(405);
echo json_encode(['success' => false, 'error' => 'Método não permitido']);
