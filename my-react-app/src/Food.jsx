
function Food(){
    // outside return statement, {} is not required to write js
    const food1 = "Orange";
    const food2 = "Apple";
    return(
        <ul>
            <li>Banana</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food