from flask import Flask, request
import mysql
import json

app = Flask(__name__)

def create_db(data):
    cnx = mysql.connect('example.db')
    c = cnx.cursor()
    
    # Create table
    c.execute('''CREATE TABLE IF NOT EXISTS example_table (id INTEGER PRIMARY KEY, 
                                                           name TEXT, 
                                                           age INTEGER, 
                                                           address TEXT)''')

    # Insert data into table
    for item in data:
        c.execute("INSERT INTO example_table (id, name, age, address) VALUES (?,?,?,?)", 
                  (item['id'], item['name'], item['age'], item['address']))
    cnx.commit()
    cnx.close()

@app.route('/api/ingest_data', methods=['POST'])
def ingest_data():
    data = request.get_json()
    create_db(data)
    return "Data ingested successfully", 200

if __name__ == '__main__':
    app.run(debug=True)
