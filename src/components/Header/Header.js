import React from 'react'

import fbLogoImage from '../../static/images/facebook.png'
import meetupLogoImage from '../../static/images/meetup.png'

import './header.css'

const Header = () => {

  return(
    <div id={'header'}>
      <span id={"link-fb"} className={"header-link"}>
        <a href={"https://www.facebook.com/events/2175188436030012/"} target={"_blank"}>
          <img src={fbLogoImage} alt={"Facebook Logo"}/>
        </a>
      </span>
      <span id={"link-meetup"} className={"header-link"}>
        <a href={"https://www.meetup.com/Ljubljana-React-Development-Meetup"} target={"_blank"}>
          <img src={meetupLogoImage} alt={"Meetup Logo"}/>
        </a>
      </span>
    </div>
  )

}

export default Header