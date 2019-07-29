import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { AppWrapper } from './styles';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </AppWrapper >
    );
  }
}

export default App;
