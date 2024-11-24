from flask import Flask,render_template,request,jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")
@app.route("/calculate",methods=['POST'])
def calculate():
    try:
        expression=request.json.get('expression','')
        result=eval(expression)
        return jsonify({'result':result})
    except Exception as e:
        print(e)
        return jsonify({'error':f'Invalid Input, {e}'})
if __name__ == "__main__":
    app.run(debug=True)