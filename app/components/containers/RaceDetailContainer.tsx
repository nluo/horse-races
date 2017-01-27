import * as React from 'react'
import { connect } from 'react-redux'
import * as RaceActions from '../../actions/raceActions'
import * as _ from 'lodash'
import { RaceDetail } from '../views/raceDetail'

export function RaceDetailContainer (props: any) {
    return (
        <RaceDetail {...props} />
    )
}


const mapStateToProps = function (state: any) {
    return {
        race: state.raceState.visibleRace
    }
}

export default connect(mapStateToProps)(RaceDetailContainer)