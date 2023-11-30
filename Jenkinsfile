pipeline {
    agent {
                docker {
            // image 'node:lts-buster-slim'
                  image 'cypress/base:20.9.0'
            args '-p 3000:3000'
        }
    }
    environment {
        CYPRESS_CACHE_FOLDER = './tmp/Cypress'
    }

    stages {
      stage('Checkout & Install') {
        steps {
             checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/dkeating2/ReactStarter.git']])
                    sh '''
                     #   MD5_SUM_PACKAGE_JSON=$(md5sum package.json)
                     #   CACHE_FOLDER=/home/jenkins/.cache/npm/${MD5_SUM_PACKAGE_JSON}
                     #   
                     #   # check if folder exists and copy node_modules to current directory
                     #   if [ -d ${CACHE_FOLDER} ]; then
                     #   cp -r ${CACHE_FOLDER}/node_modules .
                     #   fi
                     #   
                        npm install --no-audit --legacy-peer-deps
                     #   
                     #   # if folder does not exists, create it and cache node_modules folder
                     #   if ! [ -d ${CACHE_FOLDER} ]; then
                     #   mkdir -p ${CACHE_FOLDER}
                     #   cp -r node_modules ${CACHE_FOLDER}/node_modules
                     #   fi
                        '''
          }
      }
      stage('Lint, Build, and Test'){
        failFast true
        parallel{
            stage('Vitest Tests'){
                        steps{
                            sh 'npm run test:vitest'
                        }
                    }
           stage('Cypress Component Tests'){
                        steps{
                            sh 'npm run test:cypress:component'
                        }
                    }
                
            stage('Lint'){
                steps{
                sh 'npm run lint'
                }
            }
            stage("Build and E2E Test"){
                stages {
                    stage("Build"){
                        steps{
                            sh 'npm run build'
                        }
                    }
                    stage("Run Preview"){
                        steps{
                            sh 'npm run preview'
                        }
                    }
                    stage("E2E Tests"){
                        steps{ 
                            sh 'npm run test:cypress:e2e'
                        }
                    }
                }
               
            }
        }
      }
     
    stage("Merge Coverage"){
        steps{
            sh 'npm run test:merge-coverage'
        }       
    }
    /*
    stage("Sonar Scan"){
        steps{
            withSonarQubeEnv('SonarQube') {
                sh 'npm run sonar'
            }
        }
    }
     */
    }   
   
}