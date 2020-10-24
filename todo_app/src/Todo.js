import React from 'react'
import { List, ListItem ,ListItemText,ListItemAvatar,Avatar} from '@material-ui/core';
import './Todo.css'

function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
            <ListItemAvatar>
        </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Dummy Deadline"></ListItemText>
            </ListItem>
        </List>
    )
}

export default Todo
