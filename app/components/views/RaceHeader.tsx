import * as React from 'react'

export function RaceHeader (props: RaceCardItemProps) {
    const { race } = props

    return (
        <p>Venue: {race.venue}, {race.country}, <em> Race {race.raceNum} </em> </p>
    )
}