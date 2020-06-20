import React from "react";


import AiIcon from "appRoot/comps/AiIcon";
import AiBtn from "appRoot/comps/AiBtn";

import './noti.css';



export default function AiNoti({ opened = false, kind = "info", message, onClose = () => { } }) {
    return (
        <div className={`ai-noti ${(opened ? "opened" : "closed")}`}>
            <div className={`noti-container ${kind}`}>
                <div style={{ flex: 1, marginLeft: 8 }}>{message}</div>
                <AiBtn onClick={onClose}>
                    <AiIcon icon='close' size={20} />
                </AiBtn>
            </div>
        </div>
    )
}