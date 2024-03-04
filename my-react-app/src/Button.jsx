
function Button(){
    //use {} for codes more than one line in arrow function
    let count = 0;

    //event parameter

    const handleClick = (e) => e.target.textContent = "OUCH! 😣";


   
return(<button onDoubleClick={(e) => handleClick(e)}>Click me 😊</button>);

}
export default Button