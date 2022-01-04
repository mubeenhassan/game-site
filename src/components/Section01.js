import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import topBgImg from '../assests/images/top_bg.png'
import gopniksText from '../assests/images/gopniks.png'
import gopniksGif from '../assests/images/Gopniks.gif'
import goldenGopin from '../assests/images/Golden_gopnik.png'
import borisBea from '../assests/images/boris_bear.png'
const SCROLL_BEHAVIOUR = {
  'data-aos': 'fade-up',
}

export default function Section01() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    })
  }, [])
  return (
    <div className='sec1 bbk'>
      <div className='sec1_1'>
        <img className='sec1_1_bg' src={topBgImg} alt='' />
        <div className='floating-img'>
          <img className='w-100 floating' src={gopniksGif} alt='' />
        </div>
      </div>

      <div className='sec1_text ma' {...SCROLL_BEHAVIOUR}>
        <img className='w-100' src={gopniksText} alt='' />
      </div>
      <div className='sec1_2 tc'>
        <div className='w'>
          <h1 {...SCROLL_BEHAVIOUR}>
            ACT I:
            <br />
            Meet the Boys
          </h1>
          <h1 {...SCROLL_BEHAVIOUR}>What is a Gopnik?</h1>
          <p className='tj' {...SCROLL_BEHAVIOUR}>
            A Gopnik is a Russian troublemaker. We have 5555 real hard hustlers
            ready to fuck shit up. Do you like to gamble? Take risks? Drink a
            glass of vodka for breakfast? Live from hour to hour? Then join,
            this is the right place. Davaj, mint your Gopnik to conquer the
            streets. Get ready for squatting and blood clotting.{' '}
          </p>
          <div className='h64' />
          <h1 {...SCROLL_BEHAVIOUR} className='gold'>
            What can I do with my gopniks?
          </h1>
          <div className='chapters tj w-50 ma'>
            <h1 {...SCROLL_BEHAVIOUR}>
              <span className='gold'>Chapter one:</span>
            </h1>
            <h2 {...SCROLL_BEHAVIOUR}>
              - Mint him <br />- Gamble him <br />- Beaty pagion
            </h2>
            <h1 {...SCROLL_BEHAVIOUR}>
              <span className='gold'>Chapter two:</span>
            </h1>
            <h2 {...SCROLL_BEHAVIOUR}>
              - Sell him <br />- Get drops <br />- Trade him <br />- Get rich
            </h2>
            <h1 {...SCROLL_BEHAVIOUR}>
              <span className='gold'>Chapter three:</span>
            </h1>
            <h2 {...SCROLL_BEHAVIOUR}>
              Mutate him <br />x Trade him <br />x Gamble him
            </h2>
            <h1 {...SCROLL_BEHAVIOUR}>
              <span className='gold'>Chapter four:</span>
            </h1>
            <h2 {...SCROLL_BEHAVIOUR}>x coming soon</h2>
          </div>
          <div className='floating-img-con' {...SCROLL_BEHAVIOUR}>
            <div className='floating-img'>
              <img className='w-100 floating' src={gopniksGif} alt='' />
            </div>
          </div>
          <p {...SCROLL_BEHAVIOUR} className='tj'>
            100% Fair and Randomized Minting using latest Solana Candy Machine
            v2.0. No more bot or team sniping, fair for everyone
          </p>
          <h1 {...SCROLL_BEHAVIOUR}>
            <span className='gold'>mint live end:</span> 24th jan
          </h1>
          <a className='mint-btn' href='/' {...SCROLL_BEHAVIOUR}></a>
          <h1 {...SCROLL_BEHAVIOUR} className='gold'>
            HIDDEN INSIDE THE MINT MACHINE:
          </h1>
          <p {...SCROLL_BEHAVIOUR} className='tj'>
            Get lucky while minting and get one of the 52 Legendary Gopniks
            among 5555. Keep an eye open for these:
          </p>

          <div className='h64' />
          <h1 {...SCROLL_BEHAVIOUR} className='gold'>
            Golden Gopnik
          </h1>
          <img
            {...SCROLL_BEHAVIOUR}
            src={goldenGopin}
            alt=''
            className='gopin-size'
          />
          <p {...SCROLL_BEHAVIOUR} className='tj'>
            This is a one of a kind legendary Golden Gopnik holding the reward
            of 10 SOL to the lucky person that mints him.
          </p>

          <div className='h64' />
          <h1 {...SCROLL_BEHAVIOUR} className='gold'>
            {' '}
            Boris Bear
          </h1>
          <img
            {...SCROLL_BEHAVIOUR}
            src={borisBea}
            alt=''
            className='gopin-size'
          />
          <p {...SCROLL_BEHAVIOUR} className='tj'>
            Find our furry friend Boris, the bear who controls the underground
            casino. Mint him and get 10 Gopniks, free of charge.
          </p>
          <div className='h64' />
          <div {...SCROLL_BEHAVIOUR} className='traits tl '>
            <table>
              <tbody>
                <tr>
                  <td>
                    <h2 {...SCROLL_BEHAVIOUR} className='gold'>
                      traits
                    </h2>
                  </td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>name</td>
                  <td>12</td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>CITY</td>
                  <td>12</td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>Background</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td className='h32'></td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>Hat</td>
                  <td>12</td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>Hair</td>
                  <td>12</td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>Eyes</td>
                  <td>12</td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>Mouth</td>
                  <td>12</td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>Necklace</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td className='h32'></td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>Outfit top</td>
                  <td>12</td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>Outfit bottom</td>
                  <td>12</td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>HandS</td>
                  <td>12</td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td className='h32'></td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>Ancle jewelry</td>
                  <td>12</td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>Shoes</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td className='h32'></td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>resistance</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td className='h32'></td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>ATTACK</td>
                  <td>12</td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>DEFENCE</td>
                  <td>12</td>
                </tr>
                <tr {...SCROLL_BEHAVIOUR}>
                  <td>STREET CRED</td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='h64'></div>
          <h1 className='tl'>
            <span className='gold'>ROAD MAP</span> chapter 1
          </h1>
          <h2 className='tl'>
            x BEGIN MINTING <br />
            x FIRST 100 MINT 2x <br />
            1000 MINTS EVENT: BORIS CASINO OPEN
          </h2>

          <div className="h64"></div>
          <a href="https://discord.gg/aZuVzKau"><h2 className='gold'>JOIN DISCORD</h2></a>
          <h2>FOLLOW TWITTER</h2>
        </div>
      </div>
    </div>
  )
}
