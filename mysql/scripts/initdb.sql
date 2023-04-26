-- CREATE DATABASE IF NOT EXISTS nodeapp;
-- CREATE TABLE IF NOT EXISTS `nodeapp`.`people` (
--   `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   `name` varchar(255) NOT NULL,
--   `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

USE nodedb;

CREATE TABLE if not exists people (id int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50));
