# Flaskアプリ内のコード

from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    # ここで適切なデータを取得するロジックを実装する
    data = [
        {"id": 1, "name": "Item 1", "description": "Description 1"},
        {"id": 2, "name": "Item 2", "description": "Description 2"},
        {"id": 3, "name": "Item 3", "description": "Description 3"}
    ]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
