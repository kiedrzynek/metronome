import React, {useState} from 'react';
import './App.css';
import Input from './components/Input';

const App = () => {
  const [inputVal, setInputVal] = useState('');
  const inputChange = (data) => {
    setInputVal(data);
  }

  return (
    <div className="App">
      <Input 
        data={inputVal} 
        onChange={e => inputChange(e)} 
        placeholder="Type here the tempo">
      </Input>
    </div>
  );
}

export default App;
