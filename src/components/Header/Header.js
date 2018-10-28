import React from 'react'

import fbLogoImage from '../../static/images/facebook.png'
import meetupLogoImage from '../../static/images/meetup.png'

import './header.css'

const Header = () => {

  return(
    <div id={'header'}>
        <span id={"link-fb"} className={"header-link"}>
            <img src={fbLogoImage} alt={""}/>
        </span>
      <span id={"link-meetup"} className={"header-link"}>
            <img src={meetupLogoImage} alt={""}/>
        </span>
    </div>
  )
}

export default Header