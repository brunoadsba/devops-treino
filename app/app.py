from flask import Flask, render_template
from prometheus_flask_exporter import PrometheusMetrics

app = Flask(__name__, template_folder='../templates', static_folder='../static')
metrics = PrometheusMetrics(app)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

# Remove o app.run() quando for usar Gunicorn.
