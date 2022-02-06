import './Button.css'
import React from "react";

let Button = (props) => {

    return (
        <button type="button" 
        onClick={e => props.click && props.click(props.label)}
        className={`
            btn
            ${props.operation ? 'operation': '' }
            ${props.double ? 'double': '' }
            ${props.triple ? 'triple': '' }
        `}>{props.label}</button>
    )

}

export default Button;