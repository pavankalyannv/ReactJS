
import './App.css';
import {increment, decrement} from './actions'
import {useSelector, useDispatch } from 'react-redux';

// STORE

// ACTION

// REDUCER

// DISPATCH


function App() {
  const dispatch = useDispatch();
  const count = useSelector( state => state.count)
  return (
    <div className="App">
       Count : { count}
      <button onClick={() => dispatch(increment(5)) }>+</button>
      <button onClick={() => dispatch(decrement(2)) }>-</button>
    </div>
  );
}

export default App;
