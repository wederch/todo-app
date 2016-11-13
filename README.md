# Todo App

This project was migrated from [meetup-workshop](https://github.com/wederch/meetup-workshop). <br><br>
It is primarily used as a react test project. For usage see instructions below.

### Requirements
* [Git](https://git-scm.com/downloads)
* [Node.js 4.x.x](https://nodejs.org/en/)
* Your favorite code editor

### Installation

 * ```git clone https://github.com/wederch/meetup-workshop.git```
 * ```cd todo-app```
 * ```npm install```

### Usage
1. ```npm start```
2. Open browser at [localhost:8080](http://localhost:8080)

### Scripts
Command | Purpose
---|---
```npm start``` | Start the app
```npm test``` | Run tests
```npm run build:js``` | Build the app.js file
```npm run test:watch``` | Run tests continuously (on save)
```npm run dev``` | Run the app in watch mode (reloads server and updates app.js on change)<br> __Open browser at [localhost:8081](http://localhost:8081)__<br>*Tipp for IntelliJ/ Webstorm users: Disable 'safe write' in settings*
```npm run watch:js``` | Rebuild app.js on change
```npm run watch:server``` | Reload server on change

### Todos
 * Add Redux with Immutable.js
 * Add environment specific webpack configuration
 * Add routing
 * Add RxJS
 * Add React Hot Loader/ Replace server.js with webpack dev server
 * Add npm publishing
 * Add server side rendering
 * Adhere to airbnb guidelines
 * Add i18n
