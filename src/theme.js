import { createMuiTheme } from '@material-ui/core';

const gMango = '#F08A4B';
// const gMaize = '#F3CA40';
const gRed = '#D78A76';
const gBlue = '#577590';
// const gOrange = '#F2A541';

export default createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      red: `${gRed}`,
      blue: `${gBlue}`,
    },
    primary: {
      main: `${gMango}`,
    },
    secondary: {
      main: `${gBlue}`,
    },
  },
  typography: {},
});
