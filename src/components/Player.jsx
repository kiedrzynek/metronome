import React from 'react';
import sound from '../sounds/metronome-klack.wav';


const Player = (props) => {

    const handlePlay = () => props.onClick();

    return (
        <div>
            <audio id="audio">
                <source src={sound} type="audio/wav" />
            </audio>
            <button onClick={handlePlay}>{props.text}</button>
        </div>
    )
}

export default Player;