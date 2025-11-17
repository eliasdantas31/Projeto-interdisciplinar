<?php

require_once "./config/database.php";
require_once "./controllers/UsuarioController.php";

// Configuração de CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Responder OPTIONS automaticamente (necessário para CORS com React)
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

// Conexão com o banco
$database = new Database();
$db = $database->getConnection();

// Captura a URL
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Rotas disponíveis
switch ($uri) {

    // Criar usuário (POST)
    case "/meu-backend/public/index.php/usuario/criar":
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $controller = new UsuarioController();
            $controller->criar($db);
        } else {
            http_response_code(405);
            echo json_encode(["erro" => "Método não permitido"]);
        }
        break;

    // Rota inválida
    default:
        http_response_code(404);
        echo json_encode(["erro" => "Rota não encontrada"]);
        break;
}
