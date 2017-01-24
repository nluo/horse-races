import * as React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { default as RaceListContainer } from './components/containers/raceListContainer'

// Layouts
import { MainLayout } from './components/layouts/mainLayout'

export default (
  <Router history={ browserHistory }>
    <Route path="/" component={ MainLayout }>
      <Route path="/races" component = {RaceListContainer} />
    </Route>
  </Router>
)
