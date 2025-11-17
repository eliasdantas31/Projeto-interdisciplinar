<?php

require_once "../config/database.php";
require_once "../controllers/userscontroller.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

$database = new Database();
$db = $database->getConnection();


$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);


switch ($uri) {

    case "/pic/public/index.php/users/criar":
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $controller = new UsersController();
            $controller->criar($db);
        } else {
            http_response_code(405);
            echo json_encode(["erro" => "Método não permitido"]);
        }
        break;

    default:
        http_response_code(404);
        echo json_encode(["erro" => "Rota não encontrada"]);
        break;
}
