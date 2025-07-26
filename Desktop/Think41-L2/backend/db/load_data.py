import os
import csv
import mysql.connector
from dotenv import load_dotenv

load_dotenv()

connection = mysql.connector.connect(
    host=os.getenv("localhost"),
    user=os.getenv("root"),
    password=os.getenv("varun"),
    database=os.getenv("ecommerce_chatbot")
)
cursor = connection.cursor()

def load_csv_to_table(csv_path, table_name, columns):
    with open(csv_path, newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            values = tuple(row[col] if row[col] != "" else None for col in columns)
            placeholders = ', '.join(['%s'] * len(columns))
            sql = f"INSERT INTO {table_name} ({', '.join(columns)}) VALUES ({placeholders})"
            try:
                cursor.execute(sql, values)
            except Exception as e:
                print(f"Error inserting into {table_name}: {e}")

# Load each table
load_csv_to_table('csv/distribution_centers.csv', 'distribution_centers',
                  ['id', 'name', 'latitude', 'longitude'])

load_csv_to_table('csv/products.csv', 'products',
                  ['id', 'cost', 'category', 'name', 'brand', 'retail_price',
                   'department', 'sku', 'distribution_center_id'])

load_csv_to_table('csv/users.csv', 'users',
                  ['id', 'first_name', 'last_name', 'email', 'age', 'gender',
                   'state', 'street_address', 'postal_code', 'city', 'country',
                   'latitude', 'longitude', 'traffic_source', 'created_at'])

load_csv_to_table('csv/inventory_items.csv', 'inventory_items',
                  ['id', 'product_id', 'created_at', 'sold_at', 'cost', 'product_category',
                   'product_name', 'product_brand', 'product_retail_price', 'product_department',
                   'product_sku', 'product_distribution_center_id'])

load_csv_to_table('csv/orders.csv', 'orders',
                  ['order_id', 'user_id', 'status', 'gender', 'created_at',
                   'returned_at', 'shipped_at', 'delivered_at', 'num_of_item'])

load_csv_to_table('csv/order_items.csv', 'order_items',
                  ['id', 'order_id', 'user_id', 'product_id', 'inventory_item_id',
                   'status', 'created_at', 'shipped_at', 'delivered_at', 'returned_at'])

connection.commit()
cursor.close()
connection.close()
