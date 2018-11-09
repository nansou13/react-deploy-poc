This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## GH-PAGES

run `npm run deploy` to deploy on github page<br/>
I use lib gh-pages
https://nansou13.github.io/react-deploy-poc

## HEROKU

https://react-deploy-poc-nans.herokuapp.com/

use heroku branch and push it will deploy on heroku, I use serve lib

## FIREBASE

Use firebase-tool to deploy
https://react-deploy-poc.firebaseapp.com

## SURGE.SH

`npm install --global surge`
`npm run build`
`surge build/ <name>.surge.sh`
exemple : http://react-deploy-poc.surge.sh


## Zeit Now
`now build`
exemple: https://build-troucczdjd.now.sh
upgrade with https://egghead.io/courses/deploy-web-apps-with-zeit-now

## Docker build  + nginx
Build the Docker image:
`docker build -t react-deploy-poc .`
Run your application-container with:
`docker run -d -p 8080:80 react-deploy-poc`
And access using http://localhost:8080

## Netify
use netify branch and push , it will deploy on https://flamboyant-mahavira-27e29a.netlify.com/
we can add custom domain ! 

## TODOS 
Nextjs 4 ssr

S3 : https://aws.amazon.com/fr/blogs/mobile/deploy-a-react-app-to-s3-and-cloudfront-with-aws-mobile-hub/
