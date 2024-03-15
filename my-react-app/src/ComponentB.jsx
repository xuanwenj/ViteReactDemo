import ComponentC from "./ComponentC";
import React, {useContext} from 'react';
import {UserContext} from './ComponentA.jsx';

function ComponentB(){
    
    return(<div className='box'>
        <h1>ComponentB</h1>
        <ComponentC/>
    </div>);
}

export default ComponentB