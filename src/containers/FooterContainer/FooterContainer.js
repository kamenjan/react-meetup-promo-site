import React from 'react'

import Footer from '../../components/Footer/Footer'

const FooterContainer = ({location}) => {

  const footerProps = {
    callToActionLabel: location.pathname === '/' ? 'tell me more' : 'back',
    routeTo: location.pathname === '/' ? '/about' : '/'
  }

  return(
    <Footer { ...footerProps }/>
  )
}

export default FooterContainer