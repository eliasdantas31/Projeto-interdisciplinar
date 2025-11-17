<?php

require_once "../models/users.php";

class UsersController {

    public function criar($db) {

        $data = json_decode(file_get_contents("php://input"));

        if (!$data || !isset($data->email) || !isset($data->password)) {
            http_response_code(400);
            echo json_encode(["erro" => "Dados inválidos. Envie email e password."]);
            return;
        }

        $usuario = new Usuario($db);

        $usuario->email = $data->email;

        $usuario->password = password_hash($data->password, PASSWORD_DEFAULT);

        if ($usuario->criar()) {
            http_response_code(201);
            echo json_encode(["mensagem" => "Usuário criado com sucesso."]);
        } else {
            http_response_code(500);
            echo json_encode(["erro" => "Erro ao criar usuário."]);
        }
    }
}
