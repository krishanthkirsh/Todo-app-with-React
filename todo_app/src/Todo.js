import React, { useState } from 'react'
import { List, ListItem ,ListItemText,ListItemAvatar,Avatar, Button, Modal, makeStyles, TextField, IconButton, ListItemSecondaryAction} from '@material-ui/core';
import './Todo.css'
import db from './Firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { cleanup } from '@testing-library/react';

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: theme.palette.background.paper,
      },
  }));



function Todo(props) {

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(props.todo.todo);
    const classes = useStyles();

    const handelOpen = () =>{
        setOpen(true);
    };

    const updateTodo = () => {
        //update the todo with new input text 
        db.collection('todos').doc(props.todo.id).set({
            todo : input
        },{merge: true})
        setOpen(false);
    }

    const editClick = () => {
        setOpen(true); 
        setInput(props.todo.todo); 
    };
    return (
        <>
        <Modal             
            open={open}
            onClose={e => setOpen(false)}
            className={classes.modal}
            aria-labelledby="simple-modal-title"
        >

            <div className={classes.paper}>
                <h2 id="simple-modal-title">Edit Todo</h2>
                <TextField className="input_modal"  variant="outlined" value={input} onChange={event => setInput(event.target.value)}/>
                <Button className="input_modal" variant="contained" color="primary" component="span" onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>

        <List className={classes.root}>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="Dummy Deadline">
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton component="span" aria-label="edit">
                    <EditIcon onClick={editClick} className="edit_icon"></EditIcon>
                    </IconButton>
                    <IconButton component="span" aria-label="delete">
                    <DeleteForeverIcon  className="edit_icon" onClick={event => db.collection('todos').doc(props.todo.id).delete()} variant="contained" color="secondary"></DeleteForeverIcon>
                    </IconButton>
                  </ListItemSecondaryAction>
                
            </ListItem>   
        </List>
        </>
    )
}

export default Todo
