import React, { useEffect } from 'react'
import AOS from 'aos'
import { SCROLL_BEHAVIOUR, AosInitializer } from './utils/mis';
import discord from '../assests/images/discord.jpeg'

export default function Chapter01() {
  useEffect(() => {
    AosInitializer()
  }, [])
  return (
    <div className='chapter_04'>
      <div className='w tc'>
        <div className="h32"></div>
        <div className="w-75 ma">
        <h1 {...SCROLL_BEHAVIOUR}>Chapter 4</h1>
        <h3 {...SCROLL_BEHAVIOUR}>
          Our ambition with Chernobyl Gopniks is to evolve this project into
          best practice of what utility and technology offers on Solana.<br/><br/>
           At this
          stage we invite our community to take part of the journey usingDAO for
          equal distribution of ideas.<br/><br/>
          Chapter 4 is planed to take part Q3 2022.<br/><br/>
          If you wish to to get evolve, Please join our discord community.
        </h3>
          <div className="h32"></div>
          <img {...SCROLL_BEHAVIOUR} className='gopin-size' src={discord} alt="" />
        </div>
      </div>
      <div className="h64"></div>
    </div>
  )
}
