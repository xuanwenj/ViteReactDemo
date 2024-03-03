import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'

// propTypes = a mechanism that ensures that the passed value is of 
// the correct datatype.
// age: PropTypes.number
// for debugging
// defaultprops
function App() {
  // return(
    // <>
       {/* <Header/>
       <Button></Button>
       <Food/>
       <Card/>
       <Footer/> */}
       {/* data as value is not a string should be braced by curly braces */}
       {/* <Student name="Sopngebob" age={30} isStudent={true}></Student >
       <Student name="Patrick" age={42} isStudent={false}></Student>
       <Student name="Squidward" age={50} isStudent={false}></Student>
       <Student name="Sandy" age={27} isStudent={true}></Student>
       <Student name="Larry" ></Student> */}

       {/* <UserGreeting isLoggedIn={true}  username="Tim"/> */}

       
    {/* </> */}
    return(<List/>);

    
  // )
}


export default App
