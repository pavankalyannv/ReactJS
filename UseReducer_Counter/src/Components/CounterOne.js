import React, {useState, useReducer} from 'react';

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
    const err = "No Errors!"
    const [errorMsg, setErrorMsg] = useState(err);
    const [count, dispatch] = useReducer(reducerCounter, initialValues);
    var msg = "Total Count: ";
   
    const incrementButtonHandler = () =>{
      
        dispatch('increment');
        setErrorMsg(err);
    };

    const resetButtonHandler = () =>{
      
        dispatch('reset');
        setErrorMsg(" Values Reseted Successfully! ");
    };
    
    const decrementButtonHandler = () =>{
      
        if (count>0){
            console.log(count);
           dispatch('decrement');
          
        }
        else{
           setErrorMsg(" Min value can't be less than ZERO");
        }
    };
    
    return(
    <div>
        
        <h1>{msg} - {count} </h1>
        <button onClick={incrementButtonHandler}> Increment </button>
        
        <button onClick={decrementButtonHandler}> Decrement </button>
        <button onClick={resetButtonHandler}> Reset </button>
        <h1>{errorMsg} </h1>
    </div>
    );

};

export default CounterOne;