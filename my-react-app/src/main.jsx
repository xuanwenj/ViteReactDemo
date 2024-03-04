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
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
