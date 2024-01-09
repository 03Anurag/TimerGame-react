import React from 'react';
import { forwardRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ result , targetTime , remainingTime , onReset},ref){

    const youLost = remainingTime <= 0;
    const remaining = (remainingTime/1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime*1000)) *100)
  return (
    <>
        <dialog ref={ref} className='result-modal'>
            {youLost && <h2>You Lost</h2>}
            {!youLost && <h2>Your Score: {score}</h2>}
            <p>Your target time was <strong>{targetTime}</strong> seconds.</p>
            <p>You stopped the timer with <strong>{remaining} seconds left.</strong></p>

            <div>
                <button onClick={onReset}>Close</button>
            </div>
        </dialog>
    </>
  )
})

export default ResultModal