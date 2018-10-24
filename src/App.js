import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'

import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Home from './components/Home/Home'
import About from './components/About/About'
import FooterContainer from './containers/FooterContainer/FooterContainer'

import './App.css'

const FooterContainerWithRouter = withRouter( props => <FooterContainer {...props}/> )

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
          <FooterContainerWithRouter/>
        </div>
      </Router>
    )
  }
}

export default App
