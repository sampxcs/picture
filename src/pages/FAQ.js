import React from 'react'
import { Helmet } from 'react-helmet'
import FAQ from '../components/FAQ'

export default function Settings() {
  return (
    <>
      <Helmet>
        <title>Nature | FAQ</title>
      </Helmet>
      <header>
        <FAQ />
      </header>
    </>
  )
}
