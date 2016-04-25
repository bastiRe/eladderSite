import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { fontSize, width, space } from 'styled-system'

import Layout from '../components/layout'
import Phones from '../images/phones.png'
import IosIcon from '../images/download_ios.png'
import Logo from '../images/icon.png'

const Image = styled.img`
  display: block;
  ${width};
  ${space};
`
const Lead = styled.p`
  text-align: center;
  font-weight: 300;
`

const AppLink = styled.a`
  ${width};
  display: block;
  text-decoration: none;
  margin: 0 auto;
`

const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  line-height: 1;
  ${fontSize};
  ${space};
`

const IndexPage = () => (
  <Layout>
    <Flex flexDirection={['column-reverse', 'row']}>
      <Box width={[1, 1 / 2]} px={2}>
        <Image
          src={Phones}
          alt="phones with screenshots of the app"
          width="100%"
        />
      </Box>
      <Box width={[1, 1 / 2]} px={2}>
        <Image width="80px" mt={[4, 6]} mx="auto" src={Logo} alt="app icon" />
        <Title fontSize="6" my={1}>
          eLadder
        </Title>
        <Box fontSize="3" my={2}>
          <Lead>
            Create personal leagues to keep track of foosball or FIFA games. An
            ongoing, elo-based rating shows who's really the best in your
            league.
          </Lead>
        </Box>
        <Box mt={4}>
          <AppLink
            width="140px"
            href="https://itunes.apple.com/de/app/eladder/id1109846671?l=en&mt=8"
            target="_blank"
            onclick="ga('send', 'event', 'outbound', 'appstore-link', 'ios');"
          >
            <Image width="100%" src={IosIcon} alt="AppStore Link Icon" />
          </AppLink>
          <AppLink
            width="160px"
            href="https://play.google.com/store/apps/details?id=de.sebastianrehm.eladder&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          >
            <Image
              width="100%"
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
            />
          </AppLink>
        </Box>
      </Box>
    </Flex>
  </Layout>
)

export default IndexPage
