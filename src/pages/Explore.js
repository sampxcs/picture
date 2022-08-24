import React from 'react'
import { Helmet } from 'react-helmet'
import MainExplore from '../components/MainExplore'
import Footer from '../components/Footer'

export default function Explore() {
  return (
    <>
      <Helmet>
        <title>Picture | Explore</title>
      </Helmet>
      <MainExplore />
      <Footer />
    </>
  )
}
