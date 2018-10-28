import React from 'react'

import { Link } from 'react-router-dom'

import './actionButton.css'

const CallToActionButton = ({callToActionLabel, routeTo}) => {

  return(
    <div id={'call-to-action-container'}>
      <Link id={'call-to-action'} to={routeTo}>{callToActionLabel}</Link>
    </div>
  )
}

export default CallToActionButton