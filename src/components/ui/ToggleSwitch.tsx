import React, { useState } from 'react';

const ToggleSwitch: React.FC = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <button
            onClick={() => setIsOn(!isOn)}
            role="switch"
            aria-checked={isOn}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${isOn ? 'bg-primary' : 'bg-gray-300'}`}
        >
            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isOn ? 'translate-x-6' : 'translate-x-1'}`} />
        </button>
    );
};

export default ToggleSwitch;
