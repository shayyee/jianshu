import React, { Component } from 'react';
import Header from './common/header';
import {GlobalResetStyle} from './style';
import {GlobalIconStyle} from './statics/iconfont/iconfont';
import store from './store'
import {Provider} from 'react-redux'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalResetStyle/>
        <GlobalIconStyle/>
        <Provider store={store}>
          <Header/>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
