import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import { BackButton } from '../elements/backButton'

import IconButton from 'material-ui/IconButton'
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'

const Navigation: any = function (props: any, context: any) {
  console.log('the context is ', context.router.getCurrentLocation())
  return (
    <nav className="fixed-nav-bar">
      <AppBar
        title="Upcoming Horse Races"
        iconElementLeft={<IconButton><ArrowLeft/></IconButton>}
      />
    </nav>
  )
}

Navigation.contextTypes = {
  router: React.PropTypes.object
}

export default Navigation