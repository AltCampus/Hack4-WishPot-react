import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CreateWish from './components/CreateWish';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' component={Dashboard} exact />
            <Route path='/create' component={CreateWish} exact />
          </Switch>
        </Router> 
      </div>
    );
  }
}

export default App;
