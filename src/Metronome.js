import React, {useState, useRef} from 'react';
import './App.scss';
import Input from './components/Input';
import Player from './components/Player';
import img from './img/metronome.png';

const Metronome = () => {
  const [inputVal, setInputVal] = useState('');
  const inputChange = data => setInputVal(data);

  const [isPlaying, setIsPlaying] = useState(false);

  const intervalID = useRef(null);

  const tempo =  1000 * (60 / inputVal);

  const sound = document.getElementById('audio');

  const play = () => sound.play();

  const startPlaying = () => {
    intervalID.current = setInterval(play, tempo);
    setIsPlaying(true);
    sound.play();
  }

  const stopPlaying = () => {
    clearInterval(intervalID.current);
    setIsPlaying(false);
  };


  const handlePlay = () => {
    if (!isPlaying) {
      startPlaying();
    } else {
      stopPlaying();
    }
  }

  return (
    <div className="Metronome">
      <div className="header">
        <img className="metronome-img" src={img} alt=""></img>
        <span className="text-a">Your</span><span className="text-b">&nbsp;metronome</span>
      </div>
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
