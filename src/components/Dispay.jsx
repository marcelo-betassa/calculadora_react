import "./Display.css"
import React from "react";

let Display = (props) => {
    return (
        <div className="display">
            {props.value}
        </div>
    )
}

export default Display;