import React from 'react';
import { useState , useRef } from 'react';


const Player = () => {
  const [name , setName] = useState("");
  const player = useRef();

  function handleSet(){
    setName(player.current.value);
    player.current.value = "";
  }
  return (
    <>
        <h1>The Almost Final Countdown</h1>
        <p className='heading-p'>Stop the timer once you estimate that time is (almost) up</p>

        <section id="player">
          <h2>Welcome {name}</h2>
          <p>
            <input ref={player} type="text" />
            <button onClick={handleSet}>Set Name</button>
          </p>
        </section>
    </>
  )
}

export default Player;