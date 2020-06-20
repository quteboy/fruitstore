import React, { Fragment } from "react";

import AiOverlay from "appRoot/comps/AiOverlay";
import AiIcon from "appRoot/comps/AiIcon";
import AiBtn from "appRoot/comps/AiBtn";

import './drawer.css';


export default function AiDrawer({ opened = false, anchor = 'left', onClose = () => { }, children, ...props }) {
    return (
        <Fragment>
            <AiOverlay opened={opened} onClose={onClose} />
            <div className={`ai-drawer ${opened ? "opened" : "closed"} ${anchor}`}>
                {children}
            </div>
        </Fragment>
    )
}

export function AiDrawerItem({ xclass = '', icon, title, isActive = false, ...props }) {
    return (
        <AiBtn xclass={`drawer-item ${xclass} ${isActive ? 'active' : ''}`} title={title}  {...props}>
            <AiIcon icon={icon} style={{ marginRight: `16px` }} />
            {title}
        </AiBtn>
    )
}


export function AiDrawerDivider({ xclass = '', ...props }) {
    return <hr className={`${xclass}`} {...props} />;
}
