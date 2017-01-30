interface Meeting {
    id: number,
    fixed: string,
    picker: string,
    name: string,
    type: string,
    mover: 0,
    date: string,
    data_source: number,
    region: number,
    country: string,
    events: any
}

interface Event {
    id: number,
    race_num: number,
    rideGuideExists: boolean,
    description: string,
    outcome: number,
    suspend: number,
    boostType: string,
    status: string,
    fixed: number,
    fvf: number,
    ove: number,
    h2h: number,
    pyo: number,
    data_source: number
}

interface Competitor {
    name: string,
    saddleNumber: number,
    jockeyName: number
}

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
    humanlizeExpiredTime?: string,
    competitors: Competitor[]
}