import React from 'react'

import TimeTable from './../TimeTable/TimeTable'

import './about.css'

const About = () => {

  return(
    <div id={'about'}>

      <div id={"description-container"}>
        <p>Just curious what the fuss is all about? No problem. Event is
          welcoming to all skill levels and will include a short presentation
          of React.</p>
        <p>It will also be a great opportunity to see what other React
          developers are busy with, compare tool belts and add some new tools
          to it.</p>
        <TimeTable/>
        <p>Poligon was really friendly and on board with the idea so they have
          set us up with an ideal location and environment at their Creative
          Centre. PovioLabs were also very supportive and will make sure you
          won't have to leave with an empty belly or a dry mouth.</p>
        <p>Always best to take it one step at a time, but with your help next
          step could be a proper React community.</p>
        <p>Come join us on 13th of November 2018 at 6:00 PM in Creative Centre
          Poligon, Tobačna ulica 5, 1000 Ljubljana.</p>
      </div>

      {/*<TimeTable/>*/}

    </div>
  )
}

export default About