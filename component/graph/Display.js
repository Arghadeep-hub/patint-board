import React from 'react'
import { DisPlay, FullDisplay, GraphDisplay, GraphIndicator } from '../styledHome'


function Display() {

    return (
        <DisPlay>
            <GraphDisplay>

            </GraphDisplay>

            <FullDisplay>
                <GraphIndicator />
            </FullDisplay>
        </DisPlay>
    )
}

export default Display