
const FormItems = (props) =>{
   

    return(
       <li>
       
           <p>{props.name}</p>
           <p>{props.age}</p>
           <p>{props.number}</p>
           <p>{props.email}</p>
           
       </li>
    )
};

export default FormItems;