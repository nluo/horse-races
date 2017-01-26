import * as React from 'react'
import { connect } from 'react-redux'

import { RaceList } from '../views/raceList'
import * as RaceActions from '../../actions/raceActions'
import * as _ from 'lodash'
import * as moment from 'moment'

function displayHumanizeTime (dateString: string) {
    const now = moment()
    const then = moment(dateString)
    const diff = moment.duration(then.diff(now))
    return diff.humanize()
}

function getLatestExpiredTimeForRaces(races: any) {
    return races.map((race: any) => {
        return _.assign({}, race, {
            humanlizeExpiredTime: displayHumanizeTime(race.expired)
        })
    })
}

export class RaceListContainer extends React.Component<any, any> {
    public interval: number

    constructor (props: any) {
        super(props)
    }

    public async componentDidMount() {
        await RaceActions.getNext5Races()
        this.interval = setInterval(function () {
            this.setState({
                races: getLatestExpiredTimeForRaces(this.props.races)
            })
        }.bind(this), 1000)
    }

    render() {
        return <RaceList races={this.props.races} />
    }
}


const mapStateToProps = function (store: any) {
    return {
        races: store.raceState.races
    }
}

export default connect(mapStateToProps)(RaceListContainer)