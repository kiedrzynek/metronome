import React from 'react';
import sound from '../sounds/metronome-klack.wav';


const Player = (props) => {

    const handlePlay = () => props.onClick('playing');
    // const handlePause = () => props.onClick('paused');

    return (
        <div>
            <audio id="audio">
                <source src={sound} type="audio/wav" />
            </audio>
            <button onClick={handlePlay}>Play</button>
            {/* <button onClick={handlePause}>Pause</button> */}
        </div>
    )
}

export default Player;