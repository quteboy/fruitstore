import React from "react";

import AiIcon from "appRoot/comps/AiIcon";
import AiBtn from "appRoot/comps/AiBtn";

import './bottombar.css';

export default function AiBottombar({ opened = true, children }) {
    return (
        <div className={"ai-bottombar " + (opened ? "opened" : "closed")}>
            <div className="bottombar-container">{children}</div>
        </div>
    );
}

export function AiBottombarItem({ xclass = '', icon, title, isActive = false, ...props }) {
    return (
        <AiBtn xclass={`bottombar-item ${xclass} ${isActive ? 'active' : ''}`} title={title}  {...props}>
            <AiIcon icon={icon} />
            {
                title
                    ?
                    <div className="bottombar-item-title">
                        {title}
                    </div>
                    :
                    null
            }
        </AiBtn>
    )
}