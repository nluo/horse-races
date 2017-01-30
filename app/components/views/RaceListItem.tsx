import { browserHistory } from 'react-router'
import * as React from 'react'

import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

import store from '../../store'
import * as RaceActions from '../../actions/raceActions'

export function RaceListItem(props: RaceListItemProps) {
    const { race, handleRaceItemClick } = props

    return (
        <ListItem
            key={race.eventId}
            primaryText={
                <div>
                    <p>Venue: {race.venue}, {race.country} <em> R{race.raceNum} </em> </p>
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
                handleRaceItemClick(race)
            }}
        />
    )
}