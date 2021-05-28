import React,{useState} from 'react';
import './EventForm.css';
import Button from '../UI/Button/Button';

const EventForm = (props) =>{
    const [inputItem, setInputItem] = useState('');
    

    const changeItemHandler = event=>{
        setInputItem(event.target.value);
    }

    const formSubmitHandler = event =>{
        event.preventDefault();
        props.onAddItem(inputItem);
        setInputItem('');
    }

    return(
     <form onSubmit={formSubmitHandler}>
         <div  className="form-control">
             <label> Item Label </label>
             <input type="text" value={inputItem} onChange={changeItemHandler}/>
         </div>
         <Button type="submit"> Add Item </Button>
     </form>
    )
};

export default EventForm;