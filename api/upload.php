<?php
// upload.php
header('Content-Type: application/json');
$target_dir = __DIR__ . '/../uploads/';
if (!file_exists($target_dir)) {
    mkdir($target_dir, 0777, true);
}
if (!empty($_FILES['foto']['name'])) {
    $filename = time() . '_' . basename($_FILES['foto']['name']);
    $target_file = $target_dir . $filename;
    if (move_uploaded_file($_FILES['foto']['tmp_name'], $target_file)) {
        echo json_encode(['success' => true, 'path' => '/uploads/' . $filename]);
    } else {
        echo json_encode(['success' => false]);
    }
} else {
    echo json_encode(['success' => false]);
}
