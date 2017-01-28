import * as React from 'react'

import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'

import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

export function RaceDetail(props: any) {
    const { race } = props
    return (
        <div>
            <Card>
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="images/jsa-128.jpg"
                />
                <CardText>
                    {
                        race.competitors.map((competitor: any) => {
                            return <ListItem
                                key={competitor.eventId}
                                primaryText={
                                    <span> {competitor.name} </span>
                                }
                                leftAvatar={
                                    <Avatar
                                        size={30}
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