import React, {useState, useRef} from 'react';
import './App.scss';
import Input from './components/Input';
import Player from './components/Player';

const Metronome = () => {
  const [inputVal, setInputVal] = useState('');
  const inputChange = data => setInputVal(data);

  const [isPlaying, setIsPlaying] = useState(false);

  let intervalID = useRef(null);

  let tempo =  1000 * (60 / inputVal);

  let sound = document.getElementById('audio');


  const handlePlay = () => {
    if (!isPlaying) {
      intervalID.current = setInterval(function(){sound.play()}, tempo); //play sound
      setIsPlaying(true);
      sound.play();
    } else {
      clearInterval(intervalID.current); //stop playing
      setIsPlaying(false);
    }
  }

  return (
    <div className="Metronome">
      <Input 
        data={inputVal} 
        onChange={e => inputChange(e)} 
        placeholder="Type here the tempo">
      </Input>
      <Player onClick={handlePlay} text={isPlaying ? 'Pause' : 'Play'} />
    </div>
  );
}

export default Metronome;
