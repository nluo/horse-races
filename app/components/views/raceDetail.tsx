import * as React from 'react'

import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'

import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

import * as moment from 'moment'
import { browserHistory } from 'react-router'

export function RaceDetail(props: any) {
    const { race } = props
    return (
        <div>
            <a onClick={()=>{
                browserHistory.goBack()
            }}> Back </a>
            <Card>
                <CardTitle title="Race Detail"/>
                <CardHeader
                    title={
                        <div>
                            <p>Venue: {race.venue}, <em> Race {race.raceNum} </em> </p>
                        </div>
                    }
                    subtitle={
                        <span> Outcome: {moment(race.expired).format('MMMM Do YYYY, h:mm:ss a')} </span>
                    }
                    avatar={
                        <Avatar
                            size={60}
                        >
                            {race.type}
                        </Avatar>
                    }
                />
                <CardTitle title="Competitors"/>
                <CardText>
                    {
                        race.competitors.map((competitor: any) => {
                            return <ListItem
                                key={competitor.saddleNumber}
                                primaryText={competitor.name}
                                secondaryText={
                                    <div>
                                        Jockey: {competitor.jockeyName}
                                    </div>
                                }
                                rightAvatar = {
                                    <Avatar
                                        size={50}
                                    >
                                        {competitor.saddleNumber}
                                    </Avatar>
                                } />
                        })
                    }
                </CardText>
            </Card>
        </div>
    )
}