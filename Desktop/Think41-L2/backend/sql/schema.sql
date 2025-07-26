USE ecommerce_chatbot;

CREATE TABLE distribution_centers (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    latitude FLOAT,
    longitude FLOAT
);

CREATE TABLE products (
    id INT PRIMARY KEY,
    cost DECIMAL(10,2),
    category VARCHAR(100),
    name VARCHAR(255),
    brand VARCHAR(100),
    retail_price DECIMAL(10,2),
    department VARCHAR(100),
    sku VARCHAR(100),
    distribution_center_id INT,
    FOREIGN KEY (distribution_center_id) REFERENCES distribution_centers(id)
);

CREATE TABLE users (
    id INT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100),
    age INT,
    gender VARCHAR(10),
    state VARCHAR(100),
    street_address VARCHAR(255),
    postal_code VARCHAR(20),
    city VARCHAR(100),
    country VARCHAR(100),
    latitude FLOAT,
    longitude FLOAT,
    traffic_source VARCHAR(100),
    created_at DATETIME
);

CREATE TABLE inventory_items (
    id INT PRIMARY KEY,
    product_id INT,
    created_at DATETIME,
    sold_at DATETIME,
    cost DECIMAL(10,2),
    product_category VARCHAR(100),
    product_name VARCHAR(255),
    product_brand VARCHAR(100),
    product_retail_price DECIMAL(10,2),
    product_department VARCHAR(100),
    product_sku VARCHAR(100),
    product_distribution_center_id INT,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    status VARCHAR(50),
    gender VARCHAR(10),
    created_at DATETIME,
    returned_at DATETIME,
    shipped_at DATETIME,
    delivered_at DATETIME,
    num_of_item INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
    id INT PRIMARY KEY,
    order_id INT,
    user_id INT,
    product_id INT,
    inventory_item_id INT,
    status VARCHAR(50),
    created_at DATETIME,
    shipped_at DATETIME,
    delivered_at DATETIME,
    returned_at DATETIME,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
