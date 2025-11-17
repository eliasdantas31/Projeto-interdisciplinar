CREATE DATABASE IF NOT EXISTS  PICDB;
USE PICDB;

CREATE IF NOT EXISTS TABLE Users(
    id int auto_increment primary key,
    email varchar(100) unique,
    password varchar(100)
);
