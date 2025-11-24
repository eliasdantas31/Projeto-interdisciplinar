<?php

// ==== CORS ====
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$method = $_SERVER['REQUEST_METHOD']; // <-- FALTAVA AQUI !!!

// ==== IMPORTS ====
require_once __DIR__ . '/../controllers/usersController.php';
require_once __DIR__ . '/../controllers/categoryController.php';
require_once __DIR__ . '/../controllers/categoryItemController.php';
require_once __DIR__ . '/../controllers/categoryAddController.php';
require_once __DIR__ . '/../config/database.php';

// ==== DB ====
$database = new Database();
$db = $database->getConnection();

// ==== URL ====
$request = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$route = $request;
$route = str_replace('/pic/public/index.php', '', $route);
$route = str_replace('/pic/public', '', $route);
$route = str_replace('/index.php', '', $route);

$route = '/' . ltrim($route, '/');


// ==== CONTROLLERS ====
$userController = new UserController($db);
$categoryController = new CategoryController($db);
$categoryItemController = new CategoryItemController($db);
$categoryAddController = new CategoryAddsController($db);


// ===========================================================
// USERS
// ===========================================================

if ($route === '/users' && $method === 'GET') {
    $userController->index();
    exit;
}

if ($route === '/users/create' && $method === 'POST') {
    $userController->create();
    exit;
}

if ($route === '/users/login' && $method === 'POST') {
    $userController->login();
    exit;
}

if (strpos($route, '/users/show/') === 0 && $method === 'GET') {
    $id = intval(str_replace('/users/show/', '', $route));
    $userController->show($id);
    exit;
}

if (strpos($route, '/users/delete/') === 0 && $method === 'DELETE') {
    $id = intval(str_replace('/users/delete/', '', $route));
    $userController->delete($id);
    exit;
}



// ===========================================================
// CATEGORY
// ===========================================================

if ($route === '/category/create' && $method === 'POST') {
    $categoryController->create();
    exit;
}

if ($route === '/category' && $method === 'GET') {
    $categoryController->index();
    exit;
}

if ($route === '/category/menu' && $method === 'GET') {
    $categoryController->menu();
    exit;
}


// ===========================================================
// CATEGORY ITEM
// ===========================================================

if ($route === '/categoryItem/create' && $method === 'POST') {
    $categoryItemController->create();
    exit;
}

if ($route === '/categoryItem' && $method === 'GET') {
    $categoryItemController->index();
    exit;
}

if (strpos($route, '/categoryItem/update/') === 0 && $method === 'PUT') {
    $id = intval(str_replace('/categoryItem/update/', '', $route));
    $categoryItemController->update($id);
    exit;
}

if (strpos($route, '/categoryItem/delete/') === 0 && $method === 'DELETE') {
    $id = intval(str_replace('/categoryItem/delete/', '', $route));
    $categoryItemController->delete($id);
    exit;
}

if (strpos($route, '/categoryItem/show/') === 0 && $method === 'GET') {
    $id = intval(str_replace('/categoryItem/show/', '', $route));
    $categoryItemController->show($id);
    exit;
}

// ===========================================================
// CATEGORY ADDS
// ===========================================================

if ($route === '/categoryAdds/create' && $method === 'POST') {
    $categoryAddController->create();
    exit;
}

if ($route === '/categoryAdds' && $method === 'GET') {
    $categoryAddController->index();
    exit;
}


// ===========================================================
// 404
// ===========================================================
http_response_code(404);
echo json_encode(["message" => "Rota não encontrada"]);
