import React from 'react'
import Header from './../components/Header'
import Main from './../components/Main'
import Footer from '../components/Footer'

export default function Home({ params }) {
  return (
    <>
      <Header />
      <Main params={params} id='main-home' />
      {window.innerWidth > 660 && <Footer />}
    </>
  )
}
