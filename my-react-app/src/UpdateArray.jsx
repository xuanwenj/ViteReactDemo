
import React, {useState} from 'react';

function UpdateArray(){
    const [foods, setFoods]= useState(["Apple", "Orange","Banana"]);
    
function handleAddFood(){
const newFood = document.getElementById("foodInput").value;
setFoods(f => [...f, newFood]);
}
function handleRemoveFood(index){
    //use _for parameter is convention to indicat that the parameter being passed to the function
    //is ignored
setFoods(foods.filter((_, i) => i !== index));
}


return(<div>
    <h2>List of Food</h2>
    <ul>
        {foods.map((food, index) =>
        <li key={index} onClick={() => handleRemoveFood(index)}> 
                 {food}
        </li>)}

    </ul>
    <input type="text" id="foodInput" placehoder="Enter food name" />
    <button onClick={handleAddFood}>Add Food</button>
</div>);
}

export default UpdateArray;