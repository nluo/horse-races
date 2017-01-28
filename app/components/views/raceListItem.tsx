import { browserHistory } from 'react-router'
import { RouterContext } from 'react-router'
import * as React from 'react'

import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

import store from '../../store'
import * as RaceActions from '../../actions/raceActions'

function handleClick(race: any) {
    RaceActions.clickRace(race)
    return browserHistory.push(`/races/${race.eventId}`)
}

export function RaceListItem(props: any) {
    const { race } = props

    return (
        <ListItem
            key={race.eventId}
            primaryText={
                <div>
                    <p>Venue: {race.venue}, <em> R{race.raceNum} </em> </p>
                </div>
            }
            secondaryText={race.humanlizeExpiredTime}
            rightAvatar={
                <Avatar
                    size={60}
                >
                    {race.type}
                </Avatar>
            }
            onClick = {() => {
                handleClick(race)
            }}
        />
    )
}