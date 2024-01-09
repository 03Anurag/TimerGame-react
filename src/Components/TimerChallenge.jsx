import React from 'react';
import { useRef , useState } from 'react';
import ResultModal from './ResultModal';

const TimerChallenge = ({title , targetTime}) => {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining , setRemaining] = useState(targetTime * 1000);

  const timeActive = timeRemaining > 0 && timeRemaining <targetTime * 1000;

  if(timeRemaining <=0 ){
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  function handleReset(){
    setRemaining(targetTime * 1000);
    dialog.current.close()
  }


  function handleStart(){
    timer.current = setInterval(()=>{
      setRemaining(prev => prev - 10)
    },10);
  }

  function handleStop(){
    dialog.current.showModal();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} result={"You Won"} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timeActive ? handleStop : handleStart}>
            {timeActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        
        <p className={timeActive ? 'active' : undefined}>
          {timeActive ? "Timer is running..." : "Timer is inactive"}
        </p>
      </section>
    </>
  )
}

export default TimerChallenge