import { useState } from 'react';
import './ToggleButton.css';
export  const ToggaleSwitch =()=>{
    const[ison,setison]=useState(true);
    const HandleClickButton = ()=>{
        setison(!ison)
    }
    return(
        <div className="toggle-switch" onClick={HandleClickButton}   style={{ backgroundColor: ison ? 'green' : 'red' }} >
            <div className={`switch ${ison? "on":"off"}`}>
                <span className="switch-state">{ison? "on":"off"}</span>
            </div>

        </div>
    )
} 