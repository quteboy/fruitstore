import React, { Fragment } from "react";

import AiOverlay from "appRoot/comps/AiOverlay";
import AiIcon from "appRoot/comps/AiIcon";

import './loader.css';



export default function AiLoader({ opened = false, size = 24, style = {} }) {
    return (
        <Fragment>
            <AiOverlay opened={opened} />
            <div
                className={`ai-loader ${(opened ? "opened" : "closed")}`}
                style={{ top: `calc(50% - ${size / 2}px)`, left: `calc(50% - ${size / 2}px)` }}
            >
                <AiIcon
                    icon="refresh"
                    size={size}
                    xclass={`${opened ? 'ai-spin' : ''}`}
                    style={style}
                />
            </div>
        </Fragment>
    )
}