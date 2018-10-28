import React from 'react'

import TimeTable from './../TimeTable/TimeTable'

import './about.css'

const About = () => {

  return(
    <div id={'about'}>

      <div id={"description-container"}>
        <p>Just curious what the fuss is all about? No problem. This event is
          welcoming to all skill levels.</p>
        <p>It will be a great opportunity to see
          what other React developers are busy with, compare tool belts and
          maybe even add some new tools to it.</p>
        <p>Available for work? I'm sure somebody will gladly have a word
          with you.</p>
        <p>Poligon was really friendly and on board with the idea so they have
          set us up with an ideal location and environment at their Creative
          Centre. Gals and guys at PovioLabs were also supper supportive and
          will make sure no one leaves with an empty belly or dry mouth!</p>
        <p>Always best to take it one step at the time, but with your help next
          step could be a proper React community.</p>
        <p>Come join us.</p>
      </div>

      {/*<TimeTable/>*/}

    </div>
  )
}

export default About