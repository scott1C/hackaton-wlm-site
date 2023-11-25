
import pandas as pd

from flask import Flask, jsonify
from flask_cors import CORS
from flask import Flask, jsonify, request

app = Flask(__name__)
CORS(app)  # Enable CORS for your Flask app


@app.route('/api/data', methods=['GET'])
def get_data():
    # Здесь можно вернуть данные, которые клиент запросил
    data = {'message': 'Idi nahui'}
    return jsonify(data)

@app.route('/api/csvdata', methods=['GET'])
def get_csv_data():
    try:
        # Read the CSV file
        df = pd.read_csv('./data_set.csv')
        # Convert DataFrame to JSON
        data = df.to_json(orient='records')
        return data
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == 'main':
    app.run(debug=True)