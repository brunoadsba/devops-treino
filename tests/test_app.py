import pytest
from app.app import app 

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_home_route(client):
    response = client.get('/')
    assert response.status_code == 200
    assert response.data == b'Vamos nessa Devopêros :)'
