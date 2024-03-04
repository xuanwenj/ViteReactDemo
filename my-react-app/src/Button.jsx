
function Button(){
    const handleClick = () => console.log("ouch");
    const handleClick2 = (name) => console.log(`${name} stop clikcing me`);
return(<button onClick={() => handleClick2("M")}>Click me 😊</button>);

}
export default Button