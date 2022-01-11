import React, { useEffect } from 'react'
import AOS from 'aos'
import reactor2 from '../assests/images/reactor_2.png'
import reactorBurning from '../assests/images/reactor_burning.png'
import airdrops from '../assests/images/airdrops.png'
import bunker_entrence from '../assests/images/bunker_entrence.png'
import pills from '../assests/images/pills.png'
import vodka from '../assests/images/vodka.png'
import {SCROLL_BEHAVIOUR, AosInitializer} from './utils/mis'


export default function Chapter01() {
  useEffect(() => {
    AosInitializer()
  }, [])
  return (
    <div className='chapter_02'>
      <div className='h64' />
      <div className='w tc'>
        <h2 {...SCROLL_BEHAVIOUR}>CHAPTER 2</h2>
        <img {...SCROLL_BEHAVIOUR} className='w-100' src={reactor2} alt='' />
        <img
          {...SCROLL_BEHAVIOUR}
          className='w-100 mt-5'
          src={reactorBurning}
          alt=''
        />

        <h1 {...SCROLL_BEHAVIOUR} className='tc purple mt-5'>
          WARNING!!!
        </h1>
        <div className='h32'></div>
        <p {...SCROLL_BEHAVIOUR} className='tc'>
          There has been an explosion at Chernobyl. The country has issued
          everyone to remain calm and people are told to isolate themself
          inside. At this moment we are reading 3.6 roentgen around surrounding
          areas, not great, not terrible.
          <br />
          <br />
          But something is off… Rumors from Chernobyl says theres been more than
          one explosion. Speculations of a terrorist attack and fear more
          attacks will be carried out.
          <br />
          <br />
          One thing is clear. Radioactive matter is slowly getting scattered all
          over our land.
          <br />
          <br />
          The government is hiding something. They are not to be trusted.
        </p>
      </div>
      <img className='w-100' src={airdrops} alt='' />

      <div className='dark-purprl-bg w-100'>
        <div className='h32'></div>
        <div className='w tc'>
          <h1 {...SCROLL_BEHAVIOUR} className='purple'>
            RUN TO THE BUNKERS
          </h1>
          <p {...SCROLL_BEHAVIOUR}>
            Gopniks have started to go underground to shelter from the threat
            above. Delisting and staking your gopnik will grant you access to
            the bunker and the underground marketplace.
          </p>

          <div className='h3'></div>
          <div className='df mt-5'>
            <div className='w-50 ma'>
              <h1
                {...SCROLL_BEHAVIOUR}
                className='purple'
                style={{ fontSize: '1.7rem' }}
              >
                Utility chapter 2
              </h1>

              <ul
                {...SCROLL_BEHAVIOUR}
                className='_style _style_x'
                {...SCROLL_BEHAVIOUR}
              >
                <li>
                  <h2>Staking</h2>
                </li>
                <li>
                  <h2>PVP</h2>
                </li>
                <li>
                  <h2>Claim drop</h2>
                </li>
                <li>
                  <h2>$slav coin</h2>
                </li>
              </ul>
            </div>
            <div className='w-50'>
              <img
                {...SCROLL_BEHAVIOUR}
                className='w-75 ma'
                src={bunker_entrence}
                alt=''
              />
            </div>
          </div>
          <h1 {...SCROLL_BEHAVIOUR} className='purple mt-5'>
            Airdops
          </h1>

          <p {...SCROLL_BEHAVIOUR}>
            The situation above ground is getting worse. People are getting sick
            and death is spreading. Reports of a mysterious virus from Chernobyl
            that turns humans into decaying mutants is talked about in the
            bunker. The government is going to issue a vaccine but more than
            this is still a mystery.
          </p>

          <div className='h32'></div>

          <h1 {...SCROLL_BEHAVIOUR} className='purple'>
            Choose your drop
          </h1>
          <div {...SCROLL_BEHAVIOUR} className='drop-container mt-5'>
            <div className='drop'>
              <img src={pills} alt='' />
              <h2 className='gold'>Government Vaccin</h2>
            </div>
            <div className='or'>OR</div>
            <div className='drop'>
              <img src={vodka} alt='' />
              <h2 className='gold'>3.6 roentgen vodka</h2>
            </div>
          </div>
        </div>
        <div className='h64'></div>
        <div className='h64'></div>
      </div>
    </div>
  )
}
