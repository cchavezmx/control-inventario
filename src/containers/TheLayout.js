import React from 'react'
import {
  BeoContainer,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = (props) => {

  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <BeoContainer {...props}/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
