
import useInput from '../hooks/user-input';

const BasicForm = (props) => {


  const {
    value : enteredFname,
    isValid : enteredFnameIsValid,
    hasError: enteredFnameHasError,
    valueChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    reset: resetFnameInput,
  } = useInput((value) => value.trim() !== '');


  
  const {
    value : enteredLname,
    isValid : enteredLnameIsValid,
    hasError: enteredLnameHasError,
    valueChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    reset: resetLnameInput,
  } = useInput((value) => value.trim() !== '');


  
  const {
    value : enteredEmail,
    isValid : enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes('@'));


  const onSubmitHandler =(event) =>{
    event.preventDefault();

    if(!formIsValid){
      return;
    }
    resetFnameInput('');
    resetLnameInput('');
    resetEmailInput('');
  }

  var formIsValid=false;
  if(enteredFnameIsValid && enteredLnameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }

  const firstNameClasses = enteredFnameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = enteredLnameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = enteredEmailHasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
              type='text' 
              id='lname' 
              value={enteredFname} 
              onChange={fnameChangeHandler} 
              onBlur={fnameBlurHandler}  
          />
          {enteredFnameHasError && <p className="error-text"> Fname should not be empty </p>}
        </div>

        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
                type='text' 
                id='lname' 
                value={enteredLname}
                onChange={lnameChangeHandler}
                onBlur={lnameBlurHandler}  
                />
          {enteredLnameHasError && <p className="error-text"> Lname need not be Empty</p>}
        </div>
      </div>

      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
            type='text' 
            id='email'
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
             />
        {enteredEmailHasError && <p className="error-text"> Email need not be Empty</p>}
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
