import React from 'react'
import { Flex, Box } from 'grid-styled'

import Logo from '../images/icon.png'
import {
  PrimaryButton,
  Subtitle,
  Image,
  Title,
  Lead,
} from '../components/elements'
import Layout from '../components/layout'
import AppLinks from '../components/app-links'
import mobileCheck from '../utils/mobile-check'

class AddLeaguePage extends React.Component {
  constructor(props) {
    super(props)

    this._redirectToEladderApp = this._redirectToEladderApp.bind(this)
    this.state = { leagueTitle: undefined, leagueId: undefined }
  }

  componentDidMount() {
    this._parseUrl()
  }

  _parseUrl() {
    try {
      const urlString = window.location.href
      const url = new URL(urlString)
      const leagueTitle = url.searchParams.get('leagueTitle')
      const leagueId = url.searchParams.get('leagueId')
      if (!leagueTitle || !leagueId) {
        window.location.replace(window.location.origin)
      }
      this.setState({ leagueId, leagueTitle })
    } catch (e) {}
  }

  _redirectToEladderApp() {
    const { leagueId, leagueTitle } = this.state
    if (!mobileCheck()) {
      window.alert(
        `Visit this site on your mobile device to add the ${leagueTitle} league to your eLadder app!`
      )
      return
    }
    window.open(`eladder://+leagueId=${leagueId}&${leagueTitle}`)
  }

  render() {
    const { leagueTitle } = this.state
    return (
      <Layout title="eLadder - Add league">
        <Flex justifyContent="space-around">
          <Box width="1/2">
            <Image width="80px" src={Logo} mx="auto" mt={[4]} alt="app icon" />
            <Title fontSize="6" my={1}>
              eLadder
            </Title>
            <Subtitle fontSize="4"> {leagueTitle} League </Subtitle>
            <Lead>Add the league to your eLaddder app:</Lead>
            <Box my={2}>
              <PrimaryButton mx="auto" onClick={this._redirectToEladderApp}>
                Add {leagueTitle} league
              </PrimaryButton>
            </Box>
            <Lead>Or download the eLadder app:</Lead>
            <Box mt={2}>
              <AppLinks />
            </Box>
          </Box>
        </Flex>
      </Layout>
    )
  }
}

export default AddLeaguePage
