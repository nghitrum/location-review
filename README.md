# Location Review

This project is aimed to the Java Based Application course in OAMK.

I made this project based on MEAN Stack which stands for MongoDB, Express JS, Angular, Node JS.

- Angular/CLI: 1.4.4
- Node: 6.11.2
- Express: 4.15.0
- Mongo: 3.4.7
- Tyescript: 2.3.4

## How to use

First, you need to build this app. From the root folder run `ng build`. My suggestion is open a new command window and run `ng build --watch` so whenever something changes in the Angular front-end code, the project builts itself.

Then, run the server by `node server.js`. Again, my suggestion is install `nodemon` package from npm and run it as `nodemon server.js` because it will restart the server every single time it detects your change.

## Deployment

If you are running it on the local server, you can start with `http://localhost:3000`. There would be a `dist` folder which contains the compiled files.

You can always check the live version of the websie in [here](https://location-review-nghitrum.herokuapp.com/locations)	