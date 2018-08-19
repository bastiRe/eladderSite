import React from 'react'
import styled from 'styled-components'
import { width } from 'styled-system'

import { Image } from './elements'
import IosIcon from '../images/download_ios.png'

const AppLink = styled.a`
  ${width};
  display: block;
  text-decoration: none;
  margin: 0 auto;
`

const AppLinks = () => (
  <>
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
  </>
)

export default AppLinks
