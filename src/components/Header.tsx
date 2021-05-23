import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import logo from '../assets/white-Logo.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(2),
    },
    header: {
      // color: theme.palette.error,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginLeft: theme.spacing(2),
    },
    logo: {
      marginTop: '20px',
      marginBottom: '20px',
      marginRight: '20px',
    },
  }),
);

export default function AppTitle() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position='static' color='secondary'>
        <Toolbar>
          <Link to='/'>
            <img src={logo} alt='logo' className={classes.logo} />
          </Link>
          <Typography variant='h5' className={classes.title}>
            "A place to keep your todos, both long-term and short-term, as well
            as random notes. Will save to localStorage."
          </Typography>
          {/* <Link to='/login'>
            <Button>Login</Button>
          </Link> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
