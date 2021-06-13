
import useInput from '../hooks/user-input';

const SimpleInput = (props) => {

  const { 
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler:inputNameHandler ,
    inputBlurHandler: inputNameTouched,
    reset: resetFields,
    
  } = useInput( (value) => value.trim() !== '');

  const { 
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler:inputEmailHandler ,
    inputBlurHandler: inputEmailTouched,
    reset: resetEmailInput,
    
  } = useInput( (value) => value.trim().includes('@'));

  var formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }


  const onSubmitHandler = (event) =>{
    event.preventDefault();
    if(!enteredNameIsValid && !enteredEmailIsValid){
      return;
    }

    console.log(enteredName);
    resetFields();
    resetEmailInput();
  };

  
  return (
    <form onSubmit={onSubmitHandler}>
      
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input 
            type='text' 
            id='name' 
            value={enteredName} 
            onChange={inputNameHandler} 
            onBlur={inputNameTouched}  
        />
         {nameInputHasError &&  <p>Name need not to be null</p> }
      </div>

      <div className='form-control'>
        <label htmlFor='name'>Your Email</label>
        <input type='email' 
          id='email' 
          value={enteredEmail} 
          onChange={inputEmailHandler} 
          onBlur={inputEmailTouched} 
        />
        {emailInputHasError && <p> email need not to be null</p> }
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
