import React from 'react'
import { Flex, Box } from 'grid-styled'

import { Image, Title, Lead } from '../components/elements'
import Layout from '../components/layout'
import AppLinks from '../components/app-links'
import Phones from '../images/phones.png'
import Logo from '../images/icon.png'

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
          <AppLinks />
        </Box>
      </Box>
    </Flex>
  </Layout>
)

export default IndexPage
