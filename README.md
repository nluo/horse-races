# Live Upcoming Horse Races
An application written in React/Redux and Node.js with Typescript to display 5 upcoming horse races

## Get Start/Development mode

Clone the repo

```javascript
git clone git@github.com:nluo/horse-races.git
```
Install the dependencies

```javascript
npm i
```

To start the project, we need to start the backend and frontend

```javascript
npm run backend
```
Or with docker compose,
```code
docker-compose up -d

```
This will start the Node.js backend to serve the latest races. In another terminal tab,

```javascript
npm run frontend
```

This will start the webpack dev server on http://localhost:8080

## Frontend project oranisation

### Components/Views

All components under this folder are stateless components that take props and renders HTML. I like using staeless component whenever I could as they follow Functional programming concept, i.e. takes some properties from Props and then return HTML, without mutating any objects/properties/states. They could be easily reused and easier for unit test.

### Components/Containers
These are the components that talks to/subscribe to the the store and gets new states from store and then render the stateless components. The components that need to manage lifecycle are written in ES6 class, the others don't are written in stateless components.

### Components/Layouts
Stateless components that define the application layout and navigation

### Reducers
They are all pure functions that takes an action and return a new state (with Object.assign)


## Todo

1. Make it isomorphic 
2. Use Redis/Prosgres to cache the data from 3rd Party API so we don't need to fetch the 3rd Party API everytime
3. Finish dockerize the app (Already dockerize the backend)
4. Unit Test

