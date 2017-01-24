import { Link } from 'react-router'
import * as React from 'react'

import { List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader'

import { RaceListItem } from './raceListItem'

export function RaceList (props: any) {
    return (
        <div>
            <List>
                {
                    props.races.map((race: any) => {
                        return (
                            <ListItem
                                key= {race.eventId}
                                primaryText= {
                                    <p> 
                                        Location: {race.venue}&nbsp;&nbsp;
                                        <h3>R{race.raceNum}</h3>
                                    </p>
                                }
                                />
                            )
                    })
                }
            </List>
        </div>
    )
}