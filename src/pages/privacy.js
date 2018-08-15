import React from 'react'
import { Flex, Box } from 'grid-styled'
import Safe from 'react-safe'

import Layout from '../components/layout'

const PrivacyPage = () => (
  <Layout>
    <a
      href="https://www.iubenda.com/privacy-policy/7947842"
      className="iubenda-white no-brand iub-body-embed iubenda-embed"
      title="Privacy Policy"
    >
      Privacy Policy
    </a>

    <Safe.script
    >{`(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src = "https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`}</Safe.script>
  </Layout>
)

export default PrivacyPage
