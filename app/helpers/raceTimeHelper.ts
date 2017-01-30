import * as moment from 'moment'
const humanizeDuration = require('humanize-duration')
import * as _ from 'lodash'

export function displayHumanizeTime (dateString: string): string {
    var now = moment()
    var then = moment(dateString);
    var diffSeconds = now.diff(then, 'milliseconds');

    if (diffSeconds > 0) {
        return 'Closed'
    }

    return humanizeDuration(diffSeconds, {
        round: true
    })
}

export function getLatestExpiredTimeForRaces(races: Race[]) {
    return races.map((race: any) => {
        return _.assign({}, race, {
            humanlizeExpiredTime: displayHumanizeTime(race.expired)
        })
    })
}