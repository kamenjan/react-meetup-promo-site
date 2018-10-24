import React from 'react'

import CallToActionButton from './../CallToActionButton/CallToActionButton'

const Footer = () => {

  return(
    <div id={'footer'}>

      <CallToActionButton/>

      <div id={"sponsors-container"}>
        <span>
          poligon
          {/*<img src="static/poligon.png" alt="">*/}
        </span>
        <span>
          povio
          {/*<img src="static/povio.png" alt="">*/}
        </span>
        <span>
          toshl
          {/*<img src="static/toshl.png" alt="">*/}
        </span>
      </div>

    </div>
  )
}

export default Footer