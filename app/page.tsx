import CTA from '@/components/CTA'
import Designer from '@/components/Designer'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Work from '@/components/Work'
import React from 'react'

export default function page() {
  return (
    <div className='md:mx-4 lg:w-[80%] lg:mx-auto lg:mt-4'>
      <Header/>
      <Hero/>
      <Services/>
      <Designer/>
      <Work/>
      <CTA/>
      <Footer/>
    </div>
  )
}
