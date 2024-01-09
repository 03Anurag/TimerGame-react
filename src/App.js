import React from 'react';
import './App.css'
import Player from './Components/Player';
import TimerChallenge from './Components/TimerChallenge';

const App = () => {
  return (
    <>
    <div id="content">
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy"} targetTime={1}/>
        <TimerChallenge title={"Medium"} targetTime={5}/>
        <TimerChallenge title={"Hard"} targetTime={10}/>
        <TimerChallenge title={"Pro"} targetTime={20}/>
      </div>
      </div>
    </>
  )
}

export default App