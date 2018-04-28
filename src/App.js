import React, { Component } from 'react';
import './App.css';
import { Switch } from 'antd'
import Header from './containers/header/header'
import Main from './containers/main/main'
import Footer from './containers/footer/footer'

class App extends Component {
  render() {
    return (
        <div className="App">
           <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
  }
}

export default App;
