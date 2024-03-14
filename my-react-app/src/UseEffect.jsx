import React, {useState, useEffect} from 'react';

function UseEffect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');
//  update the title every time rerender the page
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, )
//  update only once(the first time rerender the page)
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, [])
//  update the title when the value in the dependencies changes 
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color])
    
    return () => {
        //some cleanup code
    }
    function addCount(){
        setCount(c => c + 1)
    }

    function subtractCount(){
        setCount(c => c - 1)
    }

    function changeColor(){
        setColor(c => c === 'green' ? 'red' : 'green');
    }
    return(<>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button><br/>
    <button onClick={changeColor}>Change Color</button>
    </>);
}
export default UseEffect