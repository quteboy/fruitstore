import React, { Component } from "react";


import AiBtn from "appRoot/comps/AiBtn";
import AiIcon from "appRoot/comps/AiIcon";

import './toolbar.css';

export default class AiToolbar extends Component {
    state = {
        isOpened: true
    };

    componentDidMount() {
        this.appRoot = document.getElementById("root");
        this.lastScrollTop = document.documentElement.scrollTop;

        const { scrolling = true } = this.props;
        if (scrolling) {
            window.addEventListener("scroll", this.handleScroll);
        }
    }

    componentWillUnmount() {
        console.log("Toolbar componentWillUnmount");
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = e => {
        requestAnimationFrame(() => {
            const ScrollTop = document.documentElement.scrollTop;
            const toolbarElm = this.appRoot.querySelector("div.ai-toolbar");

            if (toolbarElm) {
                if (ScrollTop > 62) {
                    if (ScrollTop > this.lastScrollTop) {
                        if (this.state.isOpened) {
                            this.setState({ isOpened: false });
                        }
                    } else {
                        if (!this.state.isOpened) {
                            this.setState({ isOpened: true });
                        }
                    }
                } else {
                    if (!this.state.isOpened) {
                        this.setState({ isOpened: true });
                    }
                }
            }

            this.lastScrollTop = ScrollTop;
        });
    };

    render() {
        const { children } = this.props;
        const { isOpened = true } = this.state;

        return (
            <div className={`ai-toolbar ${isOpened ? "opened" : "closed"}`}>
                <div className="toolbar-container">{children}</div>
            </div>
        );
    }
}


export function AiToolbarItem({ icon, ...props }) {
    return (
        <AiBtn xclass="toolbar-item"  {...props}>
            <AiIcon icon={icon} />
        </AiBtn>
    )
}

export function AiToolbarTitle({ title, ...props }) {
    return (
        <div className="toolbar-item" {...props}>{title}</div>
    )
}

