DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  deparment_name VARCHAR(45) NOT NULL,
  stock_quantity INT default 0,
  price INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, deparment_name, stock_quantity, price)
VALUES ("iphone","cellphone", 30, 250.00);

INSERT INTO products (product_name, deparment_name, stock_quantity, price)
VALUES ("samsung","cellphone", 40, 350.00);

INSERT INTO products (product_name, deparment_name, stock_quantity, price)
VALUES ("Lg","cellphone", 50, 450.00);

INSERT INTO products (product_name, deparment_name, stock_quantity, price)
VALUES ("huawei","cellphone", 60, 550.00);

INSERT INTO products (product_name, deparment_name, stock_quantity, price)
VALUES ("oneplus","cellphone", 70, 750.00);

INSERT INTO products (product_name, deparment_name, stock_quantity, price)
VALUES ("note10","cellphone", 90, 850.00);

INSERT INTO products (product_name, deparment_name, stock_quantity, price)
VALUES ("note9","cellphone", 66, 850.00);

INSERT INTO products (product_name, deparment_name, stock_quantity, price)
VALUES ("laptop","electronics", 44, 850.00);

INSERT INTO products (product_name, deparment_name, stock_quantity, price)
VALUES ("camera", "electronics", 99, 850.00);

INSERT INTO products (product_name, deparment_name, stock_quantity, price)
VALUES ("keyboard","electronics", 77, 850.00);




-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);