import React, {useReducer} from 'react';
import {Segment} from 'semantic-ui-react';
import './App.css';
import {todoReducer,initialState} from './reducers/todoReducer';
import Form from './components/FormComp';
import Todo from './components/ToDoComp';



function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  return (
    
    <div className="App">
      <Segment stacked className="segment">
      Roman's list of things that arent finished, that need to be finsihed!
      <Form dispatch={dispatch}/>
      <Todo data={state} dispatch={dispatch} />
      </Segment>
    </div>
    
  );
}

export default App;
