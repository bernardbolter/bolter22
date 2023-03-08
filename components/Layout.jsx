import React from 'react'
import LayoutStyle from '../styles/layout.styles'

const Layout = ({ children }) => {
    return (
      <LayoutStyle>
        <div className="top-fade-background" />
        <div className="layout-background" />
        <div className="layout-wrapper">
          {children}
        </div>
        <div className="bottom-fade">
          {/* <div className="bottom-fade-gradient" /> */}
          <div className="bottom-fade-background" />
        </div>
      </LayoutStyle>
    )
}

export default Layout