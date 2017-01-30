import * as React from 'react'
import { connect } from 'react-redux'
import * as RaceActions from '../../actions/raceActions'
import * as _ from 'lodash'
import { RaceCardItem } from '../views/RaceCardItem'

export function RaceDetailContainer (props: RaceCardItemProps) {
    return (
        <RaceCardItem {...props} />
    )
}


const mapStateToProps = function (state: any) {
    return {
        race: state.raceState.visibleRace
    }
}

export default connect(mapStateToProps)(RaceDetailContainer)