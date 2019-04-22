import React, { Component } from 'react';

import Counter from '../containers/Counter';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <AddCounter></AddCounter>
          </div>
          <div>
            <RemoveCounter></RemoveCounter>
          </div>
        </div>
        <div>
          <Counter></Counter>
        </div>
      </div>
    );
  }
}

export default App;
