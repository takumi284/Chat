# Flaskアプリ内のコード

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# @app.route('/api/data')
# def get_data():
#     # ここで適切なデータを取得するロジックを実装する
#     data = [
#         {"id": 1, "name": "Item 1", "description": "Description 1"},
#         {"id": 2, "name": "Item 2", "description": "Description 2"},
#         {"id": 3, "name": "Item 3", "description": "Description 3"}
#     ]
#     return jsonify(data)

@app.route('/api/chat')
def chat():
    return "Hello from Flask!"

@app.route('/api/submit', methods=['POST'])
def submit_text():
    text = request.form['text']
    # ここで受け取ったテキストに対する処理を行う
    return 'Text submitted: ' + text

if __name__ == '__main__':
    app.run(debug=True)
