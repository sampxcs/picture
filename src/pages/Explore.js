import React from 'react'
import { Helmet } from 'react-helmet'
import Collections from '../components/Collections'
import Footer from '../components/Footer'

export default function Explore() {
  return (
    <>
      <Helmet>
        <title>Nature | Explore</title>
      </Helmet>
      <Collections />
      <Footer />
    </>
  )
}
