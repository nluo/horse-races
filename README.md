# Live Upcoming Horse Races
An application written in React/Redux and Node.js with Typescript to display 5 upcoming horse races

![Alt text](https://github.com/nluo/horse-races/blob/screenshot/screenshots/horse-race-screenshot-1.png "Screenshot 1")

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

## Frontend project structures

### Components/Views

All components under this folder are stateless components that take props and renders HTML. I like using stateless component whenever I could as they follow Functional programming concept, i.e. takes some properties from Props and then return HTML, without mutating any objects/properties/states. They could be easily reused and easier for unit test.

### Components/Containers
These are the components that talks to/subscribe to the the store and gets new states from store and then render the stateless components. The components that need to manage life-cycle are written in ES6 class, the others don't are written in stateless components.

### Components/Layouts
Stateless components that define the application layout and navigation

### Reducers
They are all pure functions that takes an action and return a new state (with Object.assign)


## Backend project structures

### Service/retrieveData

A service to talk to 3rd Party API to retrieve the latest horse races and transform the the response to a list of 5 races (with competitors) sorted by expired time, this service and data transformation are done
in functional style without side effects. The transformed data looks something like this:
```javascript
[{
    type: "G",
    date: "2017-01-31",
    country: "USA",
    venue: "Palm Beach Matinee",
    eventId: 28191968,
    raceNum: 11,
    expired: "2017-01-30T20:39:01.000Z",
    description: "Race 11",
    status: "open",
    competitors: [
        {
            name: "Oya Dennis Wayne",
            saddleNumber: 1,
            jockeyName: "-"
        },
        {
            name: "Js Bust A Move",
            saddleNumber: 2,
            jockeyName: "-"
        },
        {
            name: "Babette's Feast",
            saddleNumber: 3,
            jockeyName: "-"
        },
        {
            name: "Ann Coulter",
            saddleNumber: 4,
            jockeyName: "-"
        },
        {
            name: "Bs Grits",
            saddleNumber: 5,
            jockeyName: "-"
        },
        {
            name: "Blacktie",
            saddleNumber: 6,
            jockeyName: "-"
        },
        {
            name: "Jw Doc Wormbog",
            saddleNumber: 7,
            jockeyName: "-"
        },
        {
            name: "Rainbow Warrior",
            saddleNumber: 8,
            jockeyName: "-"
        }
    ]
}]
```

## Todo

1. Make it isomorphic 
2. Use Redis/Prosgres to cache the data from 3rd Party API so we don't need to fetch the 3rd Party API every time
3. Finish dockerize the app (Already dockerize the backend)
4. Unit Test
5. Display API error and loading status
6. More sorting on the frontend? e.g. Race type
