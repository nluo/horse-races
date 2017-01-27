import * as React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { default as RaceListContainer } from './components/containers/RaceListContainer'
import { default as RaceDetailContainer } from './components/containers/RaceDetailContainer'

// Layouts
import { MainLayout } from './components/layouts/mainLayout'

export default (
  <Router history={ browserHistory }>
    <Route path="/" component={ MainLayout }>
      <Route path="/races" component = {RaceListContainer} />
      <Route path="/races/:eventId" component = { RaceDetailContainer } />
    </Route>
  </Router>
)
