import React, {useState} from 'react';
import './App.css';
import Input from './components/Input';
import Player from './components/Player';

const App = () => {
  const [inputVal, setInputVal] = useState('');
  const inputChange = (data) => {
    setInputVal(data);
  }

  const [play, setPlay] = useState();
  const handlePlay = (data) => {
    let audio = document.getElementById('audio');
    console.log('click play');
    setPlay(data);
    audio.play();
  }

  // const [pause, setPause] = useState();
  // const handlePause = (data) => {
  //   setPause(data);
  //   audio.pause();
  // }

  return (
    <div className="App">
      <Input 
        data={inputVal} 
        onChange={e => inputChange(e)} 
        placeholder="Type here the tempo">
      </Input>
      <Player data={play} onClick={handlePlay} />
    </div>
  );
}

export default App;
