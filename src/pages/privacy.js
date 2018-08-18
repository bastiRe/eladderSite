import React from 'react'
import { Box } from 'grid-styled'

import Layout from '../components/layout'

const PrivacyPage = ({ data }) => {
  const doc = data.allIubendaDocument.edges[0].node
  return (
    <Layout>
      <Box pt={4}>
        <div dangerouslySetInnerHTML={{ __html: doc.content }} />
      </Box>
    </Layout>
  )
}

export const query = graphql`
  {
    allIubendaDocument {
      edges {
        node {
          content
        }
      }
    }
  }
`

export default PrivacyPage
