import React, { Fragment } from "react";

import AiOverlay from "appRoot/comps/AiOverlay";
import AiBtn from "appRoot/comps/AiBtn";

import './confirm.css';

export default function AiConfirm({ opened = true, title = "Confirm", message = "Are you sure you?", hope = "Yes", nope = "Cancel", onDone = () => { } }) {

    const handleClose = isOk => () => {
        onDone(isOk);
    };

    return (
        <Fragment>
            <AiOverlay opened={opened} onClose={handleClose(false)} />
            <div className={"ai-confirm  " + (opened ? "opened" : "closed")}>
                <div className="confirm-container">
                    <div className="confirm-title">{title}</div>
                    <div className="confirm-msg">{message}</div>

                    <div className="confirm-actions">
                        <AiBtn onClick={handleClose(false)} xclass="nope">
                            {nope}
                        </AiBtn>
                        <AiBtn onClick={handleClose(true)} xclass="hope">
                            {hope}
                        </AiBtn>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
