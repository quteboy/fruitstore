import React from "react";


export default function AiIcon({ icon = "star", size = 24, xclass = '', style = {} }) {
    return (
        <i
            className={`material-icons ${xclass}`}
            style={{ ...style, fontSize: `${size}px`, lineHeight: `${size}px`, verticalAlign: `middle` }}
        >
            {icon}
        </i>
    )
}