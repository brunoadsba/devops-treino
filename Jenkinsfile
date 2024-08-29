pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building...'
                    // Comandos para construir os serviços do Docker
                    sh 'docker-compose build'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo 'Testing...'
                    // Executa os testes usando pytest no serviço flask-app
                    sh 'docker-compose run --rm flask-app pytest tests/test_app.py'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying...'
                    // Sobe os containers em segundo plano
                    sh 'docker-compose up -d'
                }
            }
        }
    }
    post {
        always {
            script {
                // Limpa os containers após o pipeline terminar
                sh 'docker-compose down'
            }
        }
    }
}
