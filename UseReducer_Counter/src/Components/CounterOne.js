import React, {useReducer} from 'react';

const initialValues = 0;
const reducerCounter = (state, action) =>{

    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialValues;
        default:
            return state;
    };
};


const CounterOne = () =>{
    const [count, dispatch] = useReducer(reducerCounter, initialValues);
    var msg = "Total Count: ";
   
    const decrementButtonHandler = () =>{
      
        if (count>0){
            console.log(count);
           dispatch('decrement');
        }
        else{
            msg=  "min value reached ";
            
        }
    };
    
    return(
    <div>
        <div> </div>
        <h1>{msg} - {count} </h1>
        <button onClick={() => dispatch('increment')}> Increment </button>
        
        <button onClick={decrementButtonHandler}> Decrement </button>
        <button onClick={() => dispatch('reset')}> Reset </button>
    </div>
    );

};

export default CounterOne;