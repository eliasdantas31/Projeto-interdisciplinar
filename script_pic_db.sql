CREATE DATABASE P2DB;
USE P2DB;

CREATE TABLE Users(
    id int auto_increment primary key,
    email varchar(100) unique,
    password varchar(100)
);
