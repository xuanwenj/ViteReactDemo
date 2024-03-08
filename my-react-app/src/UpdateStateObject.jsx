import React, {useState} from 'react';

function UpdateStateObject(){
    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});

    function handleYearChange(event){
        //spread operater... when updating the year of car, it createsa new object of the previous one
        //setCar({year: 2024, make:"Ford", model:"Mustang"})
        setCar({...car, year: event.target.value});// this way is modify the current state of car
        // make a reference of previous state, allowing for safe updates
        setCar(c => ({...c, year: event.target.value}));// use () to create an object in arrow function

    }
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
    }
    function handleModelrChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }

    return (<div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>


        <input type="number" value={car.year} onChange={handleYearChange} /> <br/>
        <input type="text" value={car.make}  onChange={handleMakeChange}/> <br/>
        <input type="text" value={car.model}  onChange={handleModelrChange}/> <br/>

    </div>);

}

export default UpdateStateObject