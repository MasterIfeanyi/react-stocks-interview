import React from 'react'
// import Nav from './subComponents/nav/Nav'
import Hero from './subComponents/banner/Hero'
import Account from './subComponents/CTA/Account.jsx'
import Story from './subComponents/story/Story.jsx'
import SmartCTA from './Smart CTA/SmartCTA.jsx'
import Features from './subComponents/Features/Features.jsx'

const Index = () => {



  return (
    <>
        <Hero />
        <SmartCTA />
        <Features />
        <Story />
        <Account />
    </>
  )
}

export default Index