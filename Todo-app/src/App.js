import React,{useState} from 'react';
import EventForm from './Components/EventForm/EventForm';
import './App.css';
import ViewItemList from './Components/ViewItemList/ViewItemList';


const App = ()=> {
  const [listItems, setListItems] = useState([
    {text:'First one', id:'a1'},
    {text:'Second one', id:'a2'}
  ])
 
  const  addItemHandler = enteredText =>{
    setListItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedItems;
    });
  };

  const deleteItemHandler = id =>{
    setListItems(prevItems =>{
      const updatedItems = prevItems.filter(item => item.id !== id);
      return updatedItems
    });
  };

  if(listItems.length > 0){
    var content = (
      <ViewItemList items={listItems} onDelete={deleteItemHandler}/>
    )
  }
  return (
    <div className="App">
    <section id="goal-form">
       <EventForm onAddItem={addItemHandler} />
     </section>
     <section id="goals">
        {content}
     </section>
    </div>
  );
}

export default App;
