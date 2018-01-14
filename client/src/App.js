import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Pages from './components/MainPages'
import Pages2 from './components/MainPagesTwo'
import Login from './components/Login'
import Register from './components/Register'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Pages}/>
          <Route exact path="/two" component={Pages2}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
