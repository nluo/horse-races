import { Link } from 'react-router'
import * as React from 'react'

import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

import * as moment from 'moment'
const humanizeDuration = require('humanize-duration')

function displayHumanizeTime (dateString: string) {
    const now: any = new Date()
    const then: any = new Date(dateString)
    const diff = now - then

    if (diff > 0) {
        return 'Closed'
    }

    return humanizeDuration(diff, {
        round: true
    })
}

export function RaceListItem (props: any) {
    const { race } =  props
    return (
        <ListItem
            key= {race.eventId}
            primaryText= {
                <div>
                    <p>Venue: {race.venue}, <em> R{race.raceNum} </em> </p>
                </div>
            }
            secondaryText = {displayHumanizeTime(race.expired)}
            rightAvatar = {
                <Avatar 
                    size={ 60 }
                > 
                    {race.type} 
                </Avatar>}
            />
    )
}