import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Logo from './logo'
import Login from './login'
import UserInfo from './userInfo'

import { media } from '../common/mediaQuery'
import { space } from '../common/theme'

const Header = styled.header`
  display: grid;
  grid-template-columns: ${space.header} 1fr ${space.xxl};

  ${media.phone`
    grid-template-columns: 2fr 1fr;
  `}
`

const SiteHeader = ({ isAuthenticated }) => (
  <Header>
    <Logo siteName="corewar" siteDomain=".io" />
    {isAuthenticated ? <UserInfo /> : <Login />}
  </Header>
)

SiteHeader.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

SiteHeader.defaultProps = {
  isAuthenticated: false
}

export default SiteHeader
