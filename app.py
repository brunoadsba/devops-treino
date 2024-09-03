from flask import Flask, render_template

app = Flask(__name__)

# Dados simulados de produtos
featured_products = [
    {"id": 1, "name": "Cadeira Gamer XYZ", "price": 999.99, "image": "static/images/cadeira-gamer.jpg"},
    {"id": 2, "name": "Notebook Gamer ABC", "price": 5999.99, "image": "static/images/notebook-gamer.jpg"},
    {"id": 3, "name": "Mouse Gamer 123", "price": 199.99, "image": "static/images/mouse-gamer.jpg"},
    {"id": 4, "name": "Teclado Mecânico RGB", "price": 399.99, "image": "static/images/teclado-mecanico.jpg"},
]

@app.route('/')
def home():
    return render_template('home.html', featured_products=featured_products)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/products')
def products():
    return render_template('products.html', products=featured_products)

@app.route('/cart')
def cart():
    return render_template('cart.html')

if __name__ == '__main__':
    app.run(debug=True)