import React from 'react'

import './timetable.css'

const TimeTable = () => {

  return(
    <div id={'time-table-container'}>
      <ul>
        <li>6.00 // Intro</li>
        <li>6.05 // What can React library do for you? (Rok Arih)</li>
        <li>6.25 // The Next(.js) Best Thing (Adam Giacomelli, Anej Gorkič)</li>
        <li>7.20 // Word from our sponsors</li>
        <li>7.30 // Relax and share a word with fellow developers over a slice of pizza</li>
      </ul>
    </div>
  )
}

export default TimeTable