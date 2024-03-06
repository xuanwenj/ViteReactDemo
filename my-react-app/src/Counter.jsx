import React, {useState} from 'react';

function Counter(){
    // array [count, setCount]: count is a statable variable, setCount is setter function to update the variable 
    const [count, setCount] = useState(0);
    const increment = () => {
        //uses teh current state to calculate the next state.
        //set functions do not trigger an update
        //react batches together state updates for performance reason.
        //next state becomes the current state after an update.
        setCount(prevVount => prevVount + 1);
        setCount(prevVount => prevVount + 1);
        setCount(prevVount => prevVount + 1);
        // takes the pending state to calculate next state
        // react puts your updater function in a queue
        // during the next render, it will call them in the same order.
    }
    const decrement = () => {
        setCount(c =>c - 1);
        setCount(c =>c - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return( <div className="counter-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={decrement}>Decrement</button>
                <button className="counter-button" onClick={reset} >Reset </button>
                <button className="counter-button" onClick={increment} >Increment </button>
        </div>)
}

export default Counter