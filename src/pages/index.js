import React from 'react'
import QuoteContainer from '../components/Quote/QuoteContainer'
import FontsContainer from '../components/UI/FontsContainer'
import { Helmet } from 'react-helmet'


const HomePage = () => {
  return (
    <>
      <Helmet title='Kanye West' />
      <FontsContainer>
        <QuoteContainer />
      </FontsContainer>
    </>
  )
}

export default HomePage