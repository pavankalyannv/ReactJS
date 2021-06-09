import React, {useEffect, Fragment, useState } from 'react';

const useEFfect = () =>{
    const [routePath, setRoutePath] = useState('users');
    const [items, setItems ] = useState([]);
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/${routePath}`)
        .then(response => response.json())
        .then(json => setItems(json))
        console.log('rendering');

        return() =>{
            console.log('pre-rendering');
        };
    },[routePath])

    return(
        <Fragment>
            
            <button onClick={()=> setRoutePath('users')}> Users </button>
            <button onClick={()=> setRoutePath('posts')}> Posts </button>
            <button onClick={()=> setRoutePath('comments')}> Comments </button>
            <h1>{routePath}</h1>
            { items.map( item =>{
                return <pre> {JSON.stringify(item)}</pre>
            })}

        </Fragment>
    );


};

export default useEFfect;
