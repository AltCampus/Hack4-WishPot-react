import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CreateWish from './components/CreateWish';
import Wishes from './components/Wishes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact component={Dashboard} exact />
            <Route path='/create' component={CreateWish}  />
            <Route path='/board/:id' component={Wishes}  />
          </Switch>
        </Router> 
      </div>
    );
  }
}

export default App;
