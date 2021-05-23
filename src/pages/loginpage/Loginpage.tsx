import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Header from './Header';
import { Container, TextField } from '@material-ui/core';
// import Footer from '../components/Footer';
// import { State } from '../types/types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import TodoListFrame from '../TodoListFrame';

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
    // hover: {
    //   height: '100px',
    //   width: '100px',
    //   background: 'red',
    //   position: 'absolute',
    //   top: '100px',
    //   left: '330px',
    // },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);

export default function Loginpage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <div className={classes.hover}></div> */}
      <Header />
      <Container maxWidth='md'>
        <div className={classes.wrapper}>
          <div>
            <Grid container spacing={1}>
              <div>
                <TextField></TextField>
              </div>
              <div>
                <TextField></TextField>
              </div>
            </Grid>
          </div>
          <div></div>
          <Grid container justify='center'>
            <Footer />
          </Grid>
        </div>
      </Container>
    </div>
  );
}
