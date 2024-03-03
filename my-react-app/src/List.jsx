//import PropTypes from './prop-types'
import PropTypes from 'prop-types'
function List(props){
 
//sort
    //fruits.sort((a,b) => a.name.localeCompare(b.name));//alphabetical
    //fruits.sort((a,b) => b.name.localeCompare(a.name));//reverse alphabetical
    //fruits.sort((a,b) => a.calories-b.calories);
    //fruits.sort((a,b) => b.calories-a.calories);

//filter
   //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
   //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    
    // const listItems = highCalFruits.map(fruit => <li key={fruit.id}>
    //                                         {fruit.name}: &nbsp;
    //                                         <b>{fruit.calories}</b></li>)
    // return(<ul>{listItems}</ul>);

    const itemList = props.items;
    const category = props.category;
    const listItems = itemList.map(item => <li key={item.id}>
                                             {item.name}: &nbsp;
                                             <b>{item.calories}</b></li>)
   //return(<ul>{listItems}</ul>);
   return(
    <>
    <h3 className="list-category">{category}</h3>
    <ul className="list-items">{listItems}</ul>
    </>
   );
}

List.defaultProps ={
    category: "Category",
    items: [],
}
List.propTypes ={
    categroy: PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({   id: PropTypes.number, 
                                                name: PropTypes.string, 
                                                calories: PropTypes.number

    }))
}

export default List