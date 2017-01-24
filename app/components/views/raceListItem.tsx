import { Link } from 'react-router'
import * as React from 'react'

import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'


export function RaceListItem (props: any) {
    const { race } =  props
    return (
        <ListItem
            key= {race.eventId}
            primaryText= {
                <div>
                    <p>Venue: {race.venue}</p>
                    <h4>R{race.raceNum}</h4>
                </div>
            }
            secondaryText = {race.expired}
            rightAvatar = {
                <Avatar 
                    size={ 60 }
                > 
                    {race.type} 
                </Avatar>}
            />
    )
}