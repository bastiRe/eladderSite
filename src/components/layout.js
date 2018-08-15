import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { Box } from 'grid-styled'

import theme from '../utils/theme'
import Head from './head'

injectGlobal`
  ${styledNormalize}
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    line-height: 1.5;
    color: #fff;

    > div {
      min-height: 100%;j
      margin: 0;
      height: 100%;
      width: 100%;
      min-width: 100%;
    }

    > div > div {
      
      height: 100%;
      min-height: 100%;j
    }
  
    a {
      color: #fff;
    }
  }
`

const Background = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 100%;
  width: 100%;
`
const Content = Box.extend`
  margin: 0 auto -48px;
  padding-bottom: 48px;
  height: 100%;
`

const Footer = styled.footer`
  height: 48px;
  padding: 8px;
  width: 100%;
  text-align: center;
`

const Layout = ({ title = 'eladder', children }) => (
  <>
    <Head title={title} />
    <ThemeProvider theme={theme}>
      <Background>
        <Content width={['100%', '45em', '60em']} px={[4, 0]}>
          {children}
        </Content>
        <Footer>
          <Link to="/privacy">Privacy Policy</Link>
        </Footer>
      </Background>
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Layout
