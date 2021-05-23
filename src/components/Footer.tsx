import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {},
  }),
);

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container justify='center'>
      <Typography className={classes.footer} variant='caption'>
        Developed by iskoti.
      </Typography>
    </Grid>
  );
}
