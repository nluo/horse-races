import * as React from 'react'
import { Link } from 'react-router'
import { Navigation } from './navigation'

export function MainLayout(props: any) {
    return (
        <div>
            <nav>
                <Navigation />
            </nav>
            <main >
                {props.children}
            </main>
        </div>
    )
}