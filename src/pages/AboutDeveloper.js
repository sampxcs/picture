import React from 'react'
import { Helmet } from 'react-helmet'
import AboutDeveloper from '../components/AboutDeveloper'
import Footer from '../components/Footer/Footer'

export default function Detail() {
  return (
    <>
      <Helmet>
        <title>Picture | About Developer</title>
      </Helmet>
      <AboutDeveloper />
      <Footer />
    </>
  )
}
