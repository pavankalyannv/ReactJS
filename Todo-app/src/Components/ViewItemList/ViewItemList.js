import React from 'react';
import ItemList from '../ItemList/ItemList';
import './ViewItemList.css';


const viewItemList = (props) =>{

  

    return(
        <ul className="goal-list">
        {props.items.map( item =>(
            <ItemList
                key={item.id}
                id={item.id}
                onDelete={props.onDelete}
                >
            {item.text}
            
            </ItemList>
            
        ))}
            
        </ul>
    )
}

export default viewItemList;