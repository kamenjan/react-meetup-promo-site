import React from 'react'

const Header = () => {

  return(
    <div id={'header'}>
        <span id="link-fb" className="link">
            FB{/*<img src="static/facebook.png" alt="">*/}
        </span>
      <span id="link-meetup" className="link">
            MEETUP{/*<img src="static/meetup.png" alt="">*/}
        </span>
      <span id="link-calendar" className="link">
            CALENDAR{/*<img src="static/calendar.png" alt="">*/}
        </span>
    </div>
  )
}

export default Header