import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyPage from './MyPage';


class App extends Component {
  button() {
    return (
      console.log("About")
    );
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <MyPage />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;