import React from 'react'

import CallToActionButton from './../CallToActionButton/CallToActionButton'

import poligonLogoImage from '../../static/images/poligon.png'
import povioLogoImage from '../../static/images/povio.png'

import './footer.css'

const Footer = ( props ) => {

  return(
    <div id={'footer'}>

      <CallToActionButton { ... props }/>

      <div id={"sponsors-container"}>
        <span>
          <a href={"https://www.poligon.si/"} target={"_blank"}>
            <img src={poligonLogoImage} alt={"Poligon Logo"}/>
          </a>
        </span>
        <span>
          <a href={"https://www.poviolabs.com/"} target={"_blank"}>
            <img src={povioLogoImage} alt={"PovioLabs Logo"}/>
          </a>
        </span>
      </div>

    </div>
  )
}

export default Footer