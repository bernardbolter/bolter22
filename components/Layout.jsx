import React from 'react'
import LayoutStyle from '../styles/layout.styles'

const Layout = ({ children }) => {

    return (
      <LayoutStyle>
        <div className="layout-wrapper">
          {children}
        </div>
      </LayoutStyle>
    )
}

export default Layout