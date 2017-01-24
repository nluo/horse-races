import { Link } from 'react-router'
import * as React from 'react'

import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'


export function RaceListItem (props: any) {
    const { race } =  props
    console.log('the race is ', race)
    return (
        <ListItem
            key= {race.eventId}
            primaryText={race.description}
            />
    )
}