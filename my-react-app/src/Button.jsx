
function Button(){
    //use {} for codes more than one line in arrow function
    let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`);
        }else{
            console.log(`${name} stop clicking me!`)
        }

    }
    //const handleClick2 = (name) => console.log(`${name} stop clikcing me`);
return(<button onClick={() => handleClick("K")}>Click me 😊</button>);

}
export default Button