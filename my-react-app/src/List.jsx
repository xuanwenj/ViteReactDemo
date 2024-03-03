
function List(){
    const fruits = [{id: 1, name:"apple", calories: 95}, 
                    {id: 2, name:"organe", calories:45 },
                    {id: 3, name:"coconut", calories:159 },
                    {id: 4, name:"banana", calories:105 },
                    {id: 5, name:"pineapple",calories:37 }];
//sort
    //fruits.sort((a,b) => a.name.localeCompare(b.name));//alphabetical
    //fruits.sort((a,b) => b.name.localeCompare(a.name));//reverse alphabetical
    //fruits.sort((a,b) => a.calories-b.calories);
    //fruits.sort((a,b) => b.calories-a.calories);

//filter
   //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
   //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    
    const listItems = highCalFruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>)
    return(<ul>{listItems}</ul>);
}

export default List