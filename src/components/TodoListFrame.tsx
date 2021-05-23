import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  List,
  ListSubheader,
  Paper,
  TextField,
  Toolbar,
} from '@material-ui/core';
import { TodoListFrameProps } from '../types/types';
import { createTodoActionCreator } from '../redux/actions';
import { useDispatch } from 'react-redux';
import TodoList from './TodoList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      fontSize: '10px',
    },
    tasks: {},
    title: {
      margin: theme.spacing(0),
    },
    formGrid: {},
    paper: {
      margin: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.paper,
      width: '100%',
      overflowY: 'auto',
      minHeight: theme.spacing(2) * 18,
      maxHeight: theme.spacing(2) * 18,
    },

    checkedTask: {
      textDecoration: 'line-through',
    },
    list: {
      marginRight: '27px',
    },
  }),
);

const TodoListFrame: React.FC<TodoListFrameProps> = ({ title, ico, type }) => {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState('');

  const classes = useStyles();

  const handleAddTodo = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (event.keyCode === 13) {
      event.preventDefault();
      const value = (event.target as HTMLInputElement).value;
      if (!value.length) return;
      dispatch(
        createTodoActionCreator({
          task: value,
          type: type,
        }),
      );
      setNewTodo('');
    }
  };

  return (
    <List className={classes.list} dense>
      <Toolbar>
        {ico}
        <ListSubheader className={classes.title}>{title}</ListSubheader>
      </Toolbar>
      <Paper className={classes.paper} variant='outlined'>
        <Grid container className={classes.formGrid}>
          <TextField
            label='Add to your list'
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
            onKeyDown={handleAddTodo}
            variant='filled'
            multiline
            fullWidth
          />
          <TodoList type={type} />
        </Grid>
      </Paper>
    </List>
  );
};

export default TodoListFrame;
