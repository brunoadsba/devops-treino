pipeline {
    agent any
    stages {
        stage('Environment Check') {
            steps {
                script {
                    echo 'Checking environment...'
                    sh 'whoami'
                    sh 'pwd'
                    sh 'docker --version'
                    sh 'docker-compose --version'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    echo 'Building Docker images...'
                    sh 'docker-compose -f docker-compose.yml build'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    sh 'docker-compose -f docker-compose.yml run --rm flask-app pytest tests/test_app.py'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying application...'
                    sh 'docker-compose -f docker-compose.yml up -d'
                }
            }
        }
    }
    post {
        always {
            script {
                echo 'Cleaning up...'
                sh 'docker-compose -f docker-compose.yml down'
            }
        }
    }
}
