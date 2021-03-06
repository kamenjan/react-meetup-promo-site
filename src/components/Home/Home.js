import React from 'react'

import CountdownCounter from '../CountdownCounter/CountdownCounter'

import './home.css'

const Home = () => {

  return(
    <div id={'home'}>

      <div id={"title-container"}>
        <h1>Ljubljana</h1>
        <h1>React Meetup</h1>
      </div>

      <CountdownCounter/>

      <div id={"date-location-info-container"}>
        <div id={"date"}>13 November 2018 6:00 PM</div>
        <div id={"location"}>Creative Centre Poligon</div>
      </div>

      <div id={"punchline-container"}>
        <p>Are you up to date on modern web development?</p>
      </div>

    </div>
  )
}

export default Home