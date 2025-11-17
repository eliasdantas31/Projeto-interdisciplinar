CREATE DATABASE IF NOT EXISTS  PICDB;
USE PICDB;

CREATE TABLE IF NOT EXISTS  Users(
    id int auto_increment primary key,
    email varchar(100) unique,
    password varchar(100) NOT NULL
);
