import pytest
from app.app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_home_page(client):
    response = client.get('/')
    assert response.status_code == 200
    assert b'Bem-vindo ao Mundo DevOps' in response.data  # Continua como byte string porque não tem caracteres especiais

def test_about_page(client):
    response = client.get('/about')
    assert response.status_code == 200
    assert 'Sobre a BrAxel Eletrônicos' in response.get_data(as_text=True)  # Corrigido para string normal
