import React from "react";
import './Button.css'
import { BsCursor } from "react-icons/bs";
function Button({color, symbol, onClick}) { 
    return (
        <div className="button" style={{backgroundColor: color}} onClick={onClick}>
            {symbol}
        </div>
    );
}

export default Button;