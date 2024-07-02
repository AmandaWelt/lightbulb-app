// src/Lightbulb.jsx

import React, { useState } from 'react';

const Lightbulb = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleLight = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="lightbulb-container">
            <img
                src={isOn ? '/light_on.png' : '/light_off.jpg'}
                alt={isOn ? 'Light On' : 'Light Off'}
                className="lightbulb-img"
            />
            <button
                onClick={toggleLight}
                className={`light-switch-button ${isOn ? 'is-on' : ''}`}
            >
                {isOn ? 'ON' : 'OFF'}
            </button>
        </div>
    );
};

export default Lightbulb;
