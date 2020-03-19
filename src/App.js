import React, { Component } from 'react';
import News from './components/News';
import SearchBar from './components/SearchBar';
import './App.css';
import { Provider } from 'react-redux';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h2>News API</h2>
          <SearchBar />
          <News />
        </div>
      </Provider>
    );
  }
}

export default App;
