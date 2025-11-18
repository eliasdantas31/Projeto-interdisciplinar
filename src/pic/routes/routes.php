<?php

require_once __DIR__ . '/../controllers/usersController.php';
require_once __DIR__ . '/../controllers/categoryController.php';
require_once __DIR__ . '/../controllers/categoryItemController.php';
require_once __DIR__ . '/../controllers/categoryAddController.php';
require_once __DIR__ . '/../config/database.php';

$database = new Database();
$db = $database->getConnection();

$request = $_SERVER['REQUEST_URI'];
$basePath = '/pic/public/index.php';
$route = str_replace($basePath, '', $request);
$method = $_SERVER['REQUEST_METHOD'];

$userController = new UserController($db);
$categoryController = new CategoryController($db);
$categoryItemController = new CategoryItemController($db);
$categoryAddController = new CategoryAddsController($db);

/* USERS */
if ($route === '/users' && $method === 'GET') {
    $userController->index();
    exit;
}

if (strpos($route, '/users/show/') === 0 && $method === 'GET') {
    $id = intval(str_replace('/users/show/', '', $route));
    $userController->show($id);
    exit;
}

if (strpos($route, '/users/create') === 0 && $method === 'POST') {
    $userController->create();
    exit;
}

if (strpos($route, '/users/login') === 0 && $method === 'POST') {
    $userController->login();
    exit;
}


/* CATEGORY */
if (strpos($route, '/category/create') === 0 && $method === 'POST') {
    $categoryController->create();
    exit;
}

if (strpos($route, '/category') === 0 && $method === 'GET') {
    $categoryController->index();
    exit;
}


/* CATEGORY ITEM */
if (strpos($route, '/categoryItem/create') === 0 && $method === 'POST') {
    $categoryItemController->create();
    exit;
}

if (strpos($route, '/categoryItem') === 0 && $method === 'GET') {
    $categoryItemController->index();
    exit;
}


/* CATEGORY ADDS */
if (strpos($route, '/categoryAdds/create') === 0 && $method === 'POST') {
    $categoryAddController->create();
    exit;
}

if (strpos($route, '/categoryAdds') === 0 && $method === 'GET') {
    $categoryAddController->index();
    exit;
}

http_response_code(404);
echo json_encode(["message" => "Rota não encontrada"]);
