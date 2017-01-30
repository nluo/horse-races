import { Link } from 'react-router'
import * as React from 'react'

import { List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader'

import { RaceListItem } from './RaceListItem'

export function RaceList (props: RaceListContainerProps) {
    return (
        <div>
            <List>
                {
                    props.races.map((race: Race) => {
                        return (
                            <RaceListItem 
                                key={race.eventId} 
                                race={race} 
                                handleRaceItemClick={props.handleRaceItemClick} 
                                />
                            )
                    })
                }
            </List>
        </div>
    )
}