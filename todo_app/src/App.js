import React, {useEffect, useState} from 'react';
import { Button, InputLabel, Input, FormControl, Container} from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './Firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //When the app load first time we need to feach the todo from firebase DB
  useEffect(() => {
    // this code fires when the app loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      //console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => ({id : doc.id, todo: doc.data().todo})))
    })
  }, [])

  const addTodo = (event) => {
    //button on click function
    event.preventDefault(); // it will stop the refresh the page
    db.collection('todos').add({
      todo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    });
    setTodos([...todos,input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>{'Welcome To React TODO App with Firebase'.toUpperCase()}</h1>
<form>

  <FormControl>
    <InputLabel>Write a Todo</InputLabel>
    <Input value={input} onChange={event => setInput(event.target.value)}/>
 </FormControl>
 <Button type="submit" disabled={!input} onClick={addTodo} variant="contained" color="primary"> Add Todo </Button>


</form>
<Container maxWidth="sm">
<div className="div_center">
      {todos.map(todo => (
                <Todo todo={todo} />
              ))}
    </div> 
</Container>
       
</div>
  );
}

export default App;
