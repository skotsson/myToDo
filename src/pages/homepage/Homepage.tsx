import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { DonutLarge, DonutSmall, ShortText } from '@material-ui/icons';
import { Container } from '@material-ui/core';
import Header from '../../components/Header';
import TodoListFrame from '../../components/TodoListFrame';
import Footer from '../../components/Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: '100vh',
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
    },

    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
    },
    title: {
      margin: theme.spacing(1),
    },
    footer: {
      textAlign: 'center',
      marginTop: theme.spacing(1),
    },
  }),
);

export default function Homepage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container disableGutters maxWidth='md'>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <TodoListFrame
              title='Today or tomorrow'
              ico={<DonutSmall />}
              type='short-term'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TodoListFrame
              title='Longer term'
              ico={<DonutLarge />}
              type='long-term'
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <TodoListFrame title='Random notes' ico={<ShortText />} type='note' />
        </Grid>
        <Grid container justify='center'>
          <Footer />
        </Grid>
      </Container>
    </div>
  );
}
