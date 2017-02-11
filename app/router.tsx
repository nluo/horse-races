import * as React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { default as RaceListContainer } from './components/containers/RaceListContainer'
import { default as RaceDetailContainer } from './components/containers/RaceDetailContainer'

// Layouts
import { MainLayout } from './components/layouts/MainLayout'

// Router redux
import store from './store'

import { syncHistoryWithStore } from 'react-router-redux'
const history = syncHistoryWithStore(browserHistory, store)


export default (
  <Router history={ history }>
    <Route path="/" component={ MainLayout }>
      <IndexRoute component={ RaceListContainer } />
      <Route path="/races" component = {RaceListContainer} />
      <Route path="/races/:eventId" component = { RaceDetailContainer } />
    </Route>
  </Router>
)
