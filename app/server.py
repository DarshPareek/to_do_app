from flask import Flask, render_template, jsonify, request
from app.saveData import save
app = Flask(__name__, template_folder='templates', static_folder='static')


@app.route('/')
def hello():
    return render_template('index.html')
@app.route('/process', methods=['POST']) 
def process(): 
    data = request.get_json()
    val = data['value']
    save(val)
    return jsonify(result='saved')  