<?php

class Category
{
    private $conn;
    private $table = "Category";

    public $id;
    public $name;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function getAll()
    {
        $sql = "SELECT * FROM $this->table ORDER BY name ASC";

        $stmt = $this->conn->prepare($sql);
        $stmt->execute();

        return $stmt;
    }

    public function getById()
    {
        $sql = "SELECT * FROM $this->table WHERE id = :id LIMIT 1";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(":id", $this->id);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function create()
    {
        $sql = "INSERT INTO $this->table (name)
                VALUES (:name)";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(":name", $this->name);

        return $stmt->execute();
    }

    public function update()
    {
        $sql = "UPDATE $this->table
                SET name = :name
                WHERE id = :id";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":id", $this->id);

        return $stmt->execute();
    }

    public function delete()
    {
        $sql = "DELETE FROM $this->table WHERE id = :id";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(":id", $this->id);

        return $stmt->execute();
    }
}
