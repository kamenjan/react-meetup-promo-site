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
          <img src={poligonLogoImage} alt=""/>
        </span>
        <span>
          <img src={povioLogoImage} alt=""/>
        </span>
      </div>

    </div>
  )
}

export default Footer