import { useState } from "react";

const UseInput = ( validateValue ) =>{

    const [enteredValue, setEnteredName] = useState('');
    const [isTouched, setisTouched] = useState(false);

    const inputIsValid  = validateValue(enteredValue);
    const hasError = !inputIsValid && isTouched;


    const valueChangeHandler = (event) =>{
        setEnteredName(event.target.value);
      };
      
      const inputBlurHandler = (event) =>{
        setisTouched(true);
      }
      
      const reset= ()=> {
        setEnteredName('');
        setisTouched('');
      }

      return {
          value: enteredValue,
          isValid: inputIsValid,
          hasError,
          valueChangeHandler,
          inputBlurHandler,
          reset,
      };
};

export default UseInput;