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
                    echo 'Building...'
                    sh '/usr/local/bin/docker-compose -f /home/bruno/devops-treino/devops-treino/docker-compose.yml build'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo 'Testing...'
                    sh '/usr/local/bin/docker-compose -f /home/bruno/devops-treino/devops-treino/docker-compose.yml run --rm flask-app pytest tests/test_app.py'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying...'
                    sh '/usr/local/bin/docker-compose -f /home/bruno/devops-treino/devops-treino/docker-compose.yml up -d'
                }
            }
        }
    }
    post {
        always {
            script {
                echo 'Cleaning up...'
                sh '/usr/local/bin/docker-compose -f /home/bruno/devops-treino/devops-treino/docker-compose.yml down'
            }
        }
    }
}