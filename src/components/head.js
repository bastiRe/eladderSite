import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.png'
import appleTouchIcon from '../images/apple-touch-icon.png'

const Head = ({ title }) => (
  <Helmet>
    <meta charset="utf-8" />
    <meta content="An app to create personal leagues to keep track of foosball or FIFA games. An ongoing, elo-based rating shows who's really the best in your league." />
    <meta
      name="keywords"
      content="fifa web app, table soccer, foosball app, tischfußball, kicker, kickern, foosball, tournament,  fifa, league, software, download, tool, app, application, programm, freeware"
    />
    <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
    <title>{title}</title>
    <link rel="icon" href={favicon} />
    <link rel="apple-touch-icon" href={appleTouchIcon} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Helmet>
)

export default Head
