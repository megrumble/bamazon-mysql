DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
item_id INTEGER (11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR (50) NULL,
department_name VARCHAR (50) NULL,
price DECIMAL (10,2) NULL,
stock_quantity INT NULL,
PRIMARY KEY (item_id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("x-box", "electronics", 300.00, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("ipad", "electronics", 250.70, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("toaster", "appliances", 79.50, 300);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("kitchenaid", "appliances", 449.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("laptop", "electronics", 250.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("basketball", "sporting goods", 25.00, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("bike", "sporting goods", 150.50, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("skateboard", "sporting goods", 70.00, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("nintendo", "electronics", 500.00, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("television", "electronics", 199.99, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("keurig", "appliances", 95.00, 20);
