import * as React from 'react'
import IconButton from 'material-ui/IconButton'
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import { browserHistory } from 'react-router'

export default function BackButton(): React.ReactElement<any> {
    return (
        <IconButton onTouchTap={() => browserHistory.goBack()}>
            <ArrowLeft color="white"></ArrowLeft>
        </IconButton>
    )
}