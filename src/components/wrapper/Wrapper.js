import React from "react";
import "./Wrapper.css";

export default function Wrapper(props) {
    return (
        <div className="main">
            <div className="container">
                <div className="main_inner">{props.card}</div>
            </div>
        </div>
    );
}
