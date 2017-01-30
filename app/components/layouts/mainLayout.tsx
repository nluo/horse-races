import * as React from 'react'
import { Link } from 'react-router'
import { default as Navigation } from './navigation'

export function MainLayout(props: any) {
    return (
        <div>
            <Navigation/>
            <div className="row">
                <div className="col-xs-12 col-md-offset-1 col-md-10">
                    <main className="main-content">
                        {props.children}
                    </main>
                </div>
            </div>
        </div>
    )
}
