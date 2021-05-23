import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import Homepage from './pages/homepage/Homepage';
// import Loginpage from './pages/loginpage/Loginpage';

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            {/* <Route exact path='/login' component={Loginpage} /> */}
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}
