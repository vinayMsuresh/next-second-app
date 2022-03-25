import React from 'react'
import Footer from '../components/Footer'

export default function About() {
  return (
    <h1>About page</h1>
  )
}

About.getLayout = function pageLayout(page){
    return(
        <>
            {page}
            <Footer />
        </>
    )
}
