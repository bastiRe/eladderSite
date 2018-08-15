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
    <script>
      {`(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('set', 'anonymizeIp', true);
      ga('create', 'UA-50870606-2', 'auto');
      ga('send', 'pageview');`}
    </script>
  </Helmet>
)

export default Head
