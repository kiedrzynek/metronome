import React, {useState} from 'react';
import './App.css';
import Input from './components/Input';
import Player from './components/Player';

const App = () => {
  const [inputVal, setInputVal] = useState('');
  const inputChange = (data) => {
    setInputVal(data);
  }

  let tempo =  1000 * 60 / inputVal;

  const [isPlaying, setIsPlaying] = useState(false);

  let audio = document.getElementById('audio');

  let playing = () => {
    setInterval(function() {
      audio.play();
    }, tempo);
  }

  const handlePlay = () => {
    playing();
    setIsPlaying(true);
  }

  const stopPlaying = () => {
    clearInterval(playing);
  }

  return (
    <div className="App">
      <Input 
        data={inputVal} 
        onChange={e => inputChange(e)} 
        placeholder="Type here the tempo">
      </Input>
      <Player onClick={handlePlay} text={isPlaying ? 'Pause' : 'Play'} />
    </div>
  );
}

export default App;
