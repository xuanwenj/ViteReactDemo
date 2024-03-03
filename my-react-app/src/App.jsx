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

    const fruits = [{id: 1, name:"apple", calories: 95}, 
    {id: 2, name:"organe", calories:45 },
    {id: 3, name:"coconut", calories:159 },
    {id: 4, name:"banana", calories:105 },
    {id: 5, name:"pineapple",calories:37 }];

    const vege = [{id: 6, name:"potato", calories: 95}, 
    {id: 7, name:"tomato", calories:45 },
    {id: 8, name:"carrige", calories:159 },
    {id: 9, name:"celery", calories:105 },
    {id: 10, name:"corn",calories:37 }];

    return(<>
    {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
    {vege.length > 0 ?  <List items={vege} category="vege"/> : null}
  
    </>
   
    
    );

    
  // )
}


export default App
