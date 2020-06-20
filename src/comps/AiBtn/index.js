import React from "react";
import { Link } from "react-router-dom";

import './btn.css';

export default function AiBtn({ xclass = "", to = "#", children, ...props }) {
    if (to === '#') {
        return (
            <button className={`ai-btn ${xclass}`}  {...props}>
                {children}
            </button>
        )
    }
    return (
        <Link className={`ai-btn ${xclass}`} to={to}  {...props}>
            {children}
        </Link>
    )
}