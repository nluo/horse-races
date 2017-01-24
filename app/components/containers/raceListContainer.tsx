import * as React from 'react'
import { connect } from 'react-redux'

import { RaceList } from '../views/raceList'
import * as RaceActions from '../../actions/raceActions'

export class RaceListContainer extends React.Component<any, any> {
    constructor (props: any) {
        super(props)
    }

    public async componentDidMount() {
        await RaceActions.getNext5Races()
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