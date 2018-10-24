import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div id={'app-container'}>
          <Header/>
          <Body>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </Switch>
          </Body>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App
