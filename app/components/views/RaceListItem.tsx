import * as React from 'react'
import { browserHistory } from 'react-router'

import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

import store from '../../store'
import * as RaceActions from '../../actions/raceActions'
import { RaceHeader } from './RaceHeader'

export function RaceListItem(props: RaceListItemProps) {
    const { race, handleRaceItemClick } = props

    return (
        <ListItem
            key={race.eventId}
            primaryText={
                <RaceHeader race={race} />
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