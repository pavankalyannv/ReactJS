import { useRef, useState } from "react";

const InputForm = (props) =>{

    const isEmpty = (value) => value.trim() === '';
    const isFiveChars = (value) => value.trim().length === 5;

    const [formInputValidity, setFormInputValidity] = useState({
        name:true,
        age:true,
        email:true,
        number:true,
    });

    const nameRef = useRef();
    const ageRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
   


    const onSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(nameRef);

        const enteredName = nameRef.current.value;
        const enteredAge = ageRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredNumber = numberRef.current.value;
        
        const nameIsValid = !isEmpty(enteredName);
        const ageIsValid  = !isEmpty(enteredAge);
        const emailIsValid = !isEmpty(enteredEmail);
        const numberIsValid = isFiveChars(enteredNumber);
        console.log(nameIsValid);
        console.log(ageIsValid);
        console.log(emailIsValid);
        console.log(numberIsValid);

        setFormInputValidity({
            name: nameIsValid,
            age : ageIsValid,
            email: emailIsValid,
            number: numberIsValid,
        });

        const formIsValid = nameIsValid && ageIsValid && emailIsValid && numberIsValid;

        if( !formIsValid) {
            console.log('returned')
            return;
        }
            console.log('after')
        props.onSubmit({
            name:enteredName ,
            age: enteredAge,
            email: enteredEmail,
            number: enteredNumber,
        });

        nameRef.current.value=' ';
        ageRef.current.value='';
        numberRef.current.value='';
        emailRef.current.value='';
        
    } 


    return (
    <form onSubmit={onSubmitHandler}>
        <div> 
            <label htmlFor='name'> Name </label>
            <input type='text' id='name' ref={nameRef}/>
            { !formInputValidity.name && <p> Name should not be empty</p>}
        </div>
        <div>
            <label htmlFor='age'> Age </label>
            <input type='text' id='age' ref={ageRef}/>
            { !formInputValidity.age && <p> Age should not be empty</p>}
        </div>    
        <div >
            <label htmlFor='email'> Email Id</label>
            <input  type='text' id='email' ref={emailRef}/>
            { !formInputValidity.email && <p>Email should not be empty</p>}
        </div>
        <div>
            <label htmlFor='number'> Number </label>
            <input type='text' id='number' ref={numberRef} />
            { !formInputValidity.number && <p> Number should be 5 char long </p>}
        </div>
        <button> Submit </button>
       
    </form>)
};

export default InputForm;