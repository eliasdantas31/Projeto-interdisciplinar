<?php

class Usuario {
    private $conn;
    private $table = "users";

    public $email;
    public $password;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function criar() {
        $sql = "INSERT INTO " . $this->table . " (email, `password` )
                VALUES (:email, :password)";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":password", $this->password);

        return $stmt->execute();
    }
}