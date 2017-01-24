import * as React from 'react'
import AppBar from 'material-ui/AppBar'

export function Navigation () {
    return (
        <nav>
          <AppBar
            title="Upcoming Horse Races"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </nav>
    )
}