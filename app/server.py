from flask import Flask, render_template, jsonify, request

app = Flask(__name__, template_folder='templates', static_folder='static')


@app.route('/')
def hello():
    return render_template('index.html')
@app.route('/process', methods=['POST']) 
def process(): 
    data = request.get_json()
    val = data['value']
    val = val.upper()
    return jsonify(result=val)  