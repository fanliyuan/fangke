SET NAMES UTF8;
DROP DATABASE IF EXISTS userlist;
CREATE DATABASE userlist CHARSET=UTF8;
USE userlist;
CREATE TABLE users(
    did INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10),
    psd VARCHAR(100)
);
INSERT INTO users VALUES(null,'admin','123123'),
(null,'xiaoming','789456');
CREATE TABLE visits(
    did INT PRIMARY KEY AUTO_INCREMENT,
    visited VARCHAR(50),

);