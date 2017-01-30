interface Race {
    type: string,
    date: string,
    country: string,
    venue: string,
    eventId: number,
    raceNum: number,
    expired: string,
    description: string,
    status: string,
    humanlizeExpiredTime: string,
    competitors: Competitor[]
}

interface Competitor {
    name: string,
    saddleNumber: number,
    jockeyName: number
}


interface RaceListItemProps {
    race: Race
}

interface RaceCardItemProps {
    race: Race
}

interface RaceListContainerProps {
    races: Race[]
}