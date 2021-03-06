import React, { Component } from 'react';
import News from './components/News';
import Article from './components/Article';
import SearchBar from './components/SearchBar';
import './App.css';
import { Provider } from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <h2>Your News</h2>
              <h4>You get what you search.</h4>
            </header>
            <Route exact path="/" component={SearchBar} />
            <Route exact path="/" component={News} />
            <Route exact path="/news/:id" component={Article} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
