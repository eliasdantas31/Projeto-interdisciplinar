CREATE DATABASE IF NOT EXISTS PICDB;
USE PICDB;

CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    admin CHAR(1) DEFAULT 'N'
);

CREATE TABLE IF NOT EXISTS Category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS CategoryItem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoryId INT NOT NULL,
    price FLOAT NOT NULL,
    name VARCHAR(100) UNIQUE NOT NULL,

    CONSTRAINT fk_categoryitem_category
        FOREIGN KEY (categoryId)
        REFERENCES Category(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS CategoryAdds (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoryId INT NOT NULL,
    name VARCHAR(100) UNIQUE NOT NULL,
    price FLOAT NOT NULL,

    CONSTRAINT fk_categoryadds_category
        FOREIGN KEY (categoryId)
        REFERENCES Category(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS Tables (
    id INT AUTO_INCREMENT PRIMARY KEY,
    num INT,               
    name VARCHAR(100)      
);

CREATE TABLE IF NOT EXISTS Orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tableId INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_orders_table
        FOREIGN KEY (tableId)
        REFERENCES Tables(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS OrderItems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    orderId INT NOT NULL,
    itemId INT NOT NULL, 
    quantity INT NOT NULL,
    observation VARCHAR(255), 

    CONSTRAINT fk_orderitems_order
        FOREIGN KEY (orderId)
        REFERENCES Orders(id)
        ON DELETE CASCADE ON UPDATE CASCADE,

    CONSTRAINT fk_orderitems_item
        FOREIGN KEY (itemId)
        REFERENCES CategoryItem(id)
        ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS OrderItemAdds (
    id INT AUTO_INCREMENT PRIMARY KEY,
    orderItemId INT NOT NULL,
    addId INT NOT NULL,  
    quantity INT NOT NULL DEFAULT 1,

    CONSTRAINT fk_itemadds_orderitem
        FOREIGN KEY (orderItemId)
        REFERENCES OrderItems(id)
        ON DELETE CASCADE ON UPDATE CASCADE,

    CONSTRAINT fk_itemadds_add
        FOREIGN KEY (addId)
        REFERENCES CategoryAdds(id)
        ON DELETE RESTRICT ON UPDATE CASCADE
);