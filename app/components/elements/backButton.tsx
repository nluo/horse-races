import IconButton from 'material-ui/IconButton'
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import * as React from 'react'

export function BackButton (): React.ReactElement<any> {
    return (
        <IconButton><ArrowLeft/></IconButton>
    )
}