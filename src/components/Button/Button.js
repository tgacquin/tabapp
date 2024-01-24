import React from "react";
import './Button.css'

function Button({color, symbol, onClick}) { 
    return (
        <div className="button" style={{backgroundColor: color}} onClick={onClick}>
            {symbol}
        </div>
    );
}

export default Button;