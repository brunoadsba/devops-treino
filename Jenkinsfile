pipeline {
    agent any
    parameters {
        choice(name: 'ENVIRONMENT', choices: ['development', 'testing', 'production'], description: 'Deployment environment')
    }
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
        stage('Validate Docker Compose') {
            steps {
                script {
                    echo 'Validating Docker Compose configuration...'
                    sh 'docker-compose -f docker-compose.yml config'
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
        stage('Tag and Push Docker Images') {
            steps {
                script {
                    def version = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
                    echo "Tagging Docker images with version: ${version}"
                    sh "docker tag flask-app:latest my-repo/flask-app:${version}"
                    sh "docker push my-repo/flask-app:${version}"
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying application...'
                    sh "docker-compose -f docker-compose.yml up -d"
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
