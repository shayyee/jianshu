import React, { Component } from 'react';
import Header from './common/header';
import {GlobalResetStyle} from './style';
import {GlobalIconStyle} from './statics/iconfont/iconfont';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalResetStyle/>
        <GlobalIconStyle/>
        <Header/>
      </React.Fragment>
    );
  }
}

export default App;
