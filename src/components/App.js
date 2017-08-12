import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className='row'>
          <div className='col-xs-4'>
            4/12
          </div>
          <div className='col-xs-2'>
            2/12
          </div>
          <div className='col-xs-6'>
            6/12
          </div>
        </div>
      </div>
    );
  }
}

export default App;
