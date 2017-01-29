import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import BackButton from '../elements/backButton'

import { connect } from 'react-redux'

const Navigation: any = function (props: any, context: any) {
  return (
    <nav className="fixed-nav-bar">
      <AppBar
        title="Upcoming Horse Races"
        iconElementLeft={
          props.navigation.shouldDisplayBackButton ?
            (<BackButton />) : null
        }
      />
    </nav>
  )
}

Navigation.contextTypes = {
  router: React.PropTypes.object
}

const mapStateToProps = function (state: any) {
  return {
    navigation: state.navigation
  }
}

export default connect(mapStateToProps)(Navigation)