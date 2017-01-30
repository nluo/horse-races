import * as React from 'react'
import { getRaceTypeFromType } from '../../helpers/getRaceType'

export function RaceHeader(props: RaceCardItemProps) {
    const { race } = props

    return (
        <p>
            Venue: {race.venue}, {race.country},
        <em> Race {race.raceNum}</em>, {getRaceTypeFromType(race.type)}
        </p>
    )
}