import * as React from 'react'
import { connect } from 'react-redux'

import { RaceList } from '../views/RaceList'
import * as RaceActions from '../../actions/raceActions'
import * as _ from 'lodash'
import * as moment from 'moment'
const humanizeDuration = require('humanize-duration')

import { browserHistory } from 'react-router'

export class RaceListContainer extends React.Component<RaceListContainerProps, RaceState> {
    private updateRaceInterval: number
    private fetchRaceInterval: number 

    constructor (props: any) {
        super(props)
    }

    componentDidMount() {
        RaceActions.getNext5Races()

        this.updateRaceInterval = setInterval(function () {
            this.props.handleUpdateRaces(this.props.races)
        }.bind(this), 1000)

        this.fetchRaceInterval = setInterval(function () {
            RaceActions.getNext5Races()
        }.bind(this), 50000)
    }

    componentWillUnmount() {
        // clear the interval
        clearInterval(this.fetchRaceInterval)
    }

    render() {
        return <RaceList {...this.props} />
    }
}

const mapStateToProps = function (state: any) {
    return {
        races: state.raceState.races,
        isFetching: state.raceState.isFetching
    }
}

const mapDispatchToProps = function (dispatch: any) {
    return {
        handleRaceItemClick: (race: Race) => {
            dispatch(RaceActions.clickRace(race))
            browserHistory.push(`/races/${race.eventId}`)
        },
        handleUpdateRaces: (races: Race[]) => {
            dispatch(RaceActions.updateRaces(races))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceListContainer)