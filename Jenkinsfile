pipeline {
    // Any 
    agent any
    // agent {
    //     label 'aws-server'
    // }

    environment {
        IMAGE_NAME = 'react-docs'
    }

    stages {

        stage('Build Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME} ."
                }
            }
        }

        stage('Push Image') {
            steps {
                script {
                    withCredentials([
                        usernamePassword(
                            credentialsId: 'dockerhub-cred',
                            usernameVariable: 'USERNAME',
                            passwordVariable: 'PASSWORD'
                        )
                    ]) {

                        sh '''
                        echo $PASSWORD | docker login -u $USERNAME --password-stdin
                        docker tag ${IMAGE_NAME} $USERNAME/${IMAGE_NAME}
                        docker push $USERNAME/${IMAGE_NAME}
                        '''
                    }
                }
            }
        }

        stage('Deployment') {
            steps {
                script {
                    sh 'kubectl apply -f ./K8s/service.yaml'
                    sh 'kubectl apply -f ./K8s/deployment.yaml'
                }
            }
        }
    }

    post {

        success {
            slackSend(
                channel: '#docs-react-netfix-app',
                color: '#00FF00',
                message: 'Success Pipeline'
            )
        }

        failure {
            slackSend(
                channel: '#docs-react-netfix-app',
                color: '#FF0000',
                message: 'Failure Pipeline'
            )
        }

        unsuccessful {
            slackSend(
                channel: '#FFFF00',
                color: '#FFFF00',
                message: 'Unsuccessful Pipeline'
            )
        }
    }
}
