import Drum from './components/Drum'
import Volume from './components/Volume';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import audio1 from './audio/Heater-1.mp3'
import audio2 from './audio/Heater-2.mp3'
import audio3 from './audio/Heater-3.mp3'
import audio4 from './audio/Heater-4_1.mp3'
import audio5 from './audio/Dsc_Oh.mp3'
import audio6 from './audio/Heater-6.mp3'
import audio7 from './audio/Kick_n_Hat.mp3'
import audio8 from './audio/RP4_KICK_1.mp3'
import audio9 from './audio/Cev_H2.mp3'

import { useState } from 'react';


const App = () => {
  
  const audio_files = [
    {
      id: 'Q',
      audio: audio1,
      description: 'Heater-1.mp3'
    },
    {
      id: 'W',
      audio: audio2,
      description: 'Heater-2.mp3'
    },
    {
      id: 'E',
      audio: audio3,
      description: 'Heater-3.mp3'
    },
    {
      id: 'A',
      audio: audio4,
      description: 'Heater-4_1.mp3'
    },
    {
      id: 'S',
      audio: audio5,
      description: 'Dsc_Oh.mp3'
    },
    {
      id: 'D',
      audio: audio6,
      description: 'Heater-6.mp3'
    },
    {
      id: 'Z',
      audio: audio7,
      description: 'Kick_n_Hat.mp3'
    },
    {
      id: 'X',
      audio: audio8,
      description: 'RP4_KICK_1.mp3'
    },
    {
      id: 'C',
      audio: audio9,
      description: 'Cev_H2.mp3'
    },
  ]
  const [volume, setVolume] = useState(50)
  const incrementVol = () => {
    if(volume < 100){
      setVolume(volume+5);
    }
  }
  const decrementVol = () => {
    if(volume > 0){
      setVolume(volume-5);
    }
  }
  const setVol = (newVol) => {
    if(newVol < 0){
      setVolume(0);
    }
    else if(newVol > 100){
      setVolume(100);
    }
    else if(newVol >= 0 && newVol <= 100){
      setVolume(newVol);
    }
    else {
      setVolume(0);
    }
  }
  return (
    <div className="App">
      <div className='container col-6 position-fixed top-50 start-50 translate-middle'>
        <h2 className='row'>
          <div className='rounded-pill col-12 bg-dark text-primary text-center border border-success rounded border-5 p-4'>
            Drum Machine
          </div>
        </h2>
        <div className='row border border-success rounded border-5 bg-brown'>
          <div className='col-auto mt-3 mb-3 ms-auto p-4'><Volume setVol={setVol} incrementVol={incrementVol} decrementVol={decrementVol} volume={volume}/></div>
          <div className='col-6 mt-3 mb-3 ms-auto me-5'><Drum volume={volume} audio_files={audio_files}/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
