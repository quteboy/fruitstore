import React, { useEffect } from "react";

import './overlay.css';

export default function AiOverlay({ opened = false, onClose = () => { } }) {

    useEffect(() => {
        const rootTag = document.getElementsByTagName("html")[0];
        if (opened) {
            rootTag.style.overflow = "hidden";
        } else {
            rootTag.style.overflow = null;
        }

        //console.log("AiOverlay", opened)

        return function cleanup() {
            rootTag.style.overflow = null;
        };
    }, [opened]);

    return (
        <div className={`ai-overlay  ${(opened ? "opened" : "closed")}`} onClick={onClose} />
    );
}
