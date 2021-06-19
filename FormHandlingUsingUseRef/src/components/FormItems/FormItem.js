import React, { useEffect, useState } from "react";
import FormItems from './FormItems';
import InputForm from './input-form';

const FormItem = () =>{
    
    const [data, setData] = useState([]);
  useEffect( () =>{ 

       const fetchUsers =  async() =>{
         
        const response = await fetch('https://single-router-250700-default-rtdb.firebaseio.com/users.json')
        
        if(!response.ok){
            throw new Error('something went wrong');
        }
        const userData = await response.json()
        console.log(userData);

     const userArray = [];
    for ( const key in userData){
        userArray.push({
            id:key,
            name: userData[key].name,
            age: userData[key].age,
            email:userData[key].email,
            number:userData[key].number,
        })
    };
   
    setData(userArray);
   
};

fetchUsers();

},[]);
    const mealList = data.map( (item)=>(
       
        <FormItems 
            key={item.id}
            id={item.id}
            name={item.name}
            age={item.age}
            email={item.email}
            number={item.number}
            
        />
    ));

    const SubmitForm = async (userData) =>{
       
        await fetch('https://single-router-250700-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify({
                users: userData,
            })
        })
    console.log('submitted')
    };

    return(
        <React.Fragment>
            <InputForm onSubmit = {SubmitForm}/>
            <ul> {mealList} </ul>

        </React.Fragment>
    )
};

export default FormItem;