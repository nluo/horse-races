import * as React from 'react'
import { connect } from 'react-redux'

import { RaceList } from '../views/raceList'
import * as RaceActions from '../../actions/raceActions'
import * as _ from 'lodash'
import * as moment from 'moment'
const humanizeDuration = require('humanize-duration')

export class RaceListContainer extends React.Component<any, any> {
    private updateRaceInterval: number
    private fetchRaceInterval: number 

    constructor (props: any) {
        super(props)
    }

    componentDidMount() {
        RaceActions.getNext5Races()

        this.updateRaceInterval = setInterval(function () {
            RaceActions.updateRaces(this.props.races)
        }.bind(this), 1000)

        this.fetchRaceInterval = setInterval(function () {
            RaceActions.getNext5Races()
        }.bind(this), 50000)
    }

    componentWillUnmount() {
        // clear the interval
        clearInterval(this.fetchRaceInterval)
        // clearInterval(this.updateRaceInterval)
    }

    render() {
        return <RaceList races={this.props.races} />
    }
}


const mapStateToProps = function (state: any) {
    return {
        races: state.raceState.races
    }
}

export default connect(mapStateToProps)(RaceListContainer)