pipeline {
    agent any
    environment {
        PATH = "/usr/local/bin:$PATH" // Inclui o caminho do docker-compose
    }
    stages {
        stage('Check Docker Compose') {
            steps {
                script {
                    echo 'Checking Docker Compose location...'
                    sh 'which docker-compose'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    echo 'Building...'
                    sh 'docker-compose -f /home/bruno/devops-treino/devops-treino/docker-compose.yml build'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo 'Testing...'
                    sh 'docker-compose -f /home/bruno/devops-treino/devops-treino/docker-compose.yml run --rm flask-app pytest tests/test_app.py'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying...'
                    sh 'docker-compose -f /home/bruno/devops-treino/devops-treino/docker-compose.yml up -d'
                }
            }
        }
    }
    post {
        always {
            script {
                echo 'Cleaning up...'
                sh 'docker-compose -f /home/bruno/devops-treino/devops-treino/docker-compose.yml down'
            }
        }
    }
}
