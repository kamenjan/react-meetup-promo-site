import React from 'react'

import { Link } from 'react-router-dom'

const CallToActionButton = ({callToActionLabel, routeTo}) => {

  return(
    <div type="button">
      <Link to={routeTo}>{callToActionLabel}</Link>
    </div>
  )
}

export default CallToActionButton