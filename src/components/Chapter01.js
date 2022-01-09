import React, { useEffect } from 'react'
import AOS from 'aos'
const SCROLL_BEHAVIOUR = {
 'data-aos': 'fade-up',
}

export default function Chapter01() {
 useEffect(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
  })
}, [])
 return (
  <section className="sec-02">
   
  </section>
 )
}
