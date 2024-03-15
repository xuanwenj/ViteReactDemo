import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// props = read-only properties that are shared between components.
// a parent component can send data to a child component.
// reuse the child component with unique value
// <Compoent key=value />

// propTypes = a mechanism that ensures that the passed value is of 
// the correct datatype.
// age: PropTypes.number
// for debugging
// defaultprops

//conditional rendering (show hide or change components)

// propTypes = a mechanism that ensures that the passed value is of 
// the correct datatype.
// age: PropTypes.number
// for debugging
// defaultprops


//click event = An interaction when a user clicks ona specific element.
//              we can respond to clicks by passing a call back to the onclick event handler.


// React hook = Special function that allow functional components to use React features without writing class components
// useStates() = a hoot that allows the creation of a stateful variable and a setter function to update its value in the Virtual DOM.
                  //[name, setName]

// onChange = event handler used primarily with form elemets
//             ex. <input>, <textarea>, <select>, <radio>
//             Traggers a functioin every time the value of the input changes                  

//Color picker

//updater function = A function passed as an argument to setState() usually
//                  ex. setYear(arrow function)
//                  allow for safe updates based on the previous state 
//                  used with multiple state updates and asynchronous functions

// update state object 

//update more state of array object 

//to do list app

// useEffect() like a side code = React Hook that tells React DO_SOME_CODE_WHEN (pick one):
//               This component re-renders
//               This component mounts: when mount a component, that's when you create and pending to the DOM,              
//               The state of a value changes
//
// useEffect(function, [dependencies]) 
//          a function that contains the code you'd like to perform,
//          optionally, an array of dependencies

//
// 1. useEffect(() => {});                  // Runs after every re-render
// 2. useEffect(() => {}, []);              // Runs only on mount(represent by using [])
// 3. useEffect(() => {}, [value]);         // Runs on mount + when value changes(represent by using [value])
//
// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts(when you remove a component from the DOM)

// set width and height

// create a digital clock 

// useContext() = React hood that allows you to share values between
//                multiple levels of components
//                without passing props through each level(nested component)
//                simplify the prop drilling

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//      <Child />
//    </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//    import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext); do this inside the component

// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//            When you want a component to “remember” some information,
//            but you don’t want that information to trigger new renders.

//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations, and Transitions
//            3. Managing Timers and Intervals

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
