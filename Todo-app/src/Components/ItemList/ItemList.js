import React from 'react';
import './ItemList.css';

const ItemList = (props) =>{
    const onDeleteHandler =event=>{
        props.onDelete(props.id);
    }
    return(
        <li className="goal-item" >
            {props.children}
            <button  className="button1" onClick={onDeleteHandler} >click me</button>
        </li>
    );
};

export default ItemList;