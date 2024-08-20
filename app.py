# from flask import Flask

# app = Flask(__name__)

# @app.route('/')
# def hello_world():
#     return 'Hello, World!'

# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=5000)

from flask import Flask

app = Flask(__name__)

# @app.route('/')  # Decorador removido
def hello_world():
    return 'Hello, World!'

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!', 404  # Retornando um erro 404 em vez de 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
