import React, { useEffect } from 'react'
import AOS from 'aos'
import { SCROLL_BEHAVIOUR, AosInitializer } from './utils/mis'
import chernobyl_mutants from '../assests/images/chernobyl_mutants.png'
import pokegopnik from '../assests/images/pokegopnik.png'
import mutant_gopnik from '../assests/images/mutant_gopnik.png'

export default function Chapter01() {
  useEffect(() => {
    AosInitializer()
  }, [])
  return (
    <div className='chapter_03'  id='chapter_03'>
      <div className='h64'></div>
      <div className='w'>
        <img {...SCROLL_BEHAVIOUR} className='w-100' src={chernobyl_mutants} alt='' />
        <h1 className='tc' {...SCROLL_BEHAVIOUR}>CHAPTER 3</h1>
        <img {...SCROLL_BEHAVIOUR} className='gopin-size df ma' src={pokegopnik} alt='' />
        <h1 {...SCROLL_BEHAVIOUR} className='red tc'>Mutant gopniks</h1>
        <h2 {...SCROLL_BEHAVIOUR} className='green mt-5 tc'>WHAT IS A TRUE GOPNIKREAL purpose?</h2>

        <ul className='_style _style_x green' {...SCROLL_BEHAVIOUR}>
          <li>
            <h2>EVOLVE</h2>
          </li>
          <li>
            <h2>GAIN SUPER POWERS</h2>
          </li>
          <li>
            <h2>ABATTLE</h2>
          </li>
        </ul>

        <h2 {...SCROLL_BEHAVIOUR} className='red mt-5 tc'>UTILITY</h2>

        <ul className='_style green' {...SCROLL_BEHAVIOUR}>
          <li>
            <h2>Mutate into a Chernobyl Gopnik</h2>
          </li>
          <li>
            <h2>Receive physical signed poster from artist</h2>
          </li>
          <li>
            <h2>Access to Secondary Market</h2>
          </li>
          <li>
            <h2>Rarity Chart</h2>
          </li>
        </ul>
      </div>
      <img className="w-100"  src={mutant_gopnik} alt="" />
    </div>
  )
}
