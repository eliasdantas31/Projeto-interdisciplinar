<?php

class CategoryItem
{
    private $conn;
    private $table = "CategoryItem";

    public $id;
    public $categoryId;
    public $name;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function getAll()
    {
        $sql = "SELECT ci.*, c.name AS categoryName
                FROM $this->table ci
                JOIN Category c ON c.id = ci.categoryId";

        $stmt = $this->conn->prepare($sql);
        $stmt->execute();

        return $stmt;
    }

    public function getById()
    {
        $sql = "SELECT ci.*, c.name AS categoryName
                FROM $this->table ci
                JOIN Category c ON c.id = ci.categoryId
                WHERE ci.id = :id
                LIMIT 1";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(":id", $this->id);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

  
    public function create()
    {
        $sql = "INSERT INTO $this->table (categoryId, name)
                VALUES (:categoryId, :name)";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindParam(":categoryId", $this->categoryId);
        $stmt->bindParam(":name", $this->name);

        return $stmt->execute();
    }

    public function update()
    {
        $sql = "UPDATE $this->table 
                SET categoryId = :categoryId,
                    name = :name
                WHERE id = :id";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindParam(":categoryId", $this->categoryId);
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