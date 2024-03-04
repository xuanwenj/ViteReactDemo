import React, {useState} from 'react';
function MyComponent(){
    

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        //when use setName function, it will trigger a render of the virtual DOM
        //with useStates, you can pass initial state
        setName("Spongebob");
    }

    const incrementAge =() => {
        setAge(age + 1);
    }
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }
    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle status</button>
    </div>);
}
export default MyComponent