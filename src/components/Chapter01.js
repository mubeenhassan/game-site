import React, { useEffect } from 'react'
import AOS from 'aos'
import topBgImg from '../assests/images/top_bg.png'
import gopinLogo from '../assests/images/Gopnik_logo.png'
import gopniksText from '../assests/images/gopniks.png'
import gopniksGif from '../assests/images/goldenshoes_.gif'
import contestImg from '../assests/images/contest.png'
import borisBea from '../assests/images/Boris_bear.png'
import borisBG from '../assests/images/Boris_logo.png'
import borisCard from '../assests/images/Gopnik_id.png'
import pistol from '../assests/images/boris_roulette.png'
import hand from '../assests/images/boris_gopnikfight.png'
import vsimg from '../assests/images/boris_beauty.png'
import band from '../assests/images/boris_slotmachine.png'
import dollar from '../assests/images/community_dollar.png'
import borisSign from '../assests/images/boris_sign.png'
import burningForest from '../assests/images/burning_forest.png'
import Golden_gopnn from '../assests/images/gopin.jpeg'
import { SCROLL_BEHAVIOUR, AosInitializer } from './utils/mis'

export default function Chapter01() {
  useEffect(() => {
    AosInitializer()
  }, [])

  return (
    <div className='sec1 bbk' id='chapter_01'>
      <div className='sec1_1'>
        <img className='sec1_1_bg' src={topBgImg} alt='' />
        <div className='floating-img mp'>
          <img
            {...SCROLL_BEHAVIOUR}
            className='w-100'
            src={gopniksText}
            alt=''
          />
        </div>
      </div>

      <div className='sec1_text ma' {...SCROLL_BEHAVIOUR}>
        <img className='w-75 ma df floating' src={gopinLogo} alt='' />
      </div>
      <div className='sec1_2 tc'>
        <div className='w'>
          <h1 {...SCROLL_BEHAVIOUR}>
            Chapter One:
            <br />
            Meet the Boys
          </h1>
          <h1 className='gold' {...SCROLL_BEHAVIOUR}>
            What is a Gopnik?
          </h1>
          <p>
            A Gopnik is a{' '}
            <a href='https://www.urbandictionary.com/define.php?term=Russian'>
              Russian
            </a>{' '}
            <a href='https://www.urbandictionary.com/define.php?term=troublemaker'>
              Troublemaker
            </a>
          </p>

          <h1 className='gold' {...SCROLL_BEHAVIOUR}>
            Why should I buy Gopnik?
          </h1>
          <p className='tj' {...SCROLL_BEHAVIOUR}>
            Because of its utility, duh! Holders of a Gopnik will be invited to
            join our extensive roadmap of community focused live events. You
            will compete in mini games with other verified holders and get
            rewards from the community chest.
            <br />
            First event will be Boris Casino, a live streamed event on Saturdays
            with live entertainment where you get to meet our beloved Boris the
            bear. The casino is just not giveaways, compete in high stake
            gambling against Boris if you can afford to lose your gopniks. We
            have prepared 3 chapters in our roadmap so you can get the full
            idea. And yes, Mutans. We have mutans.
            <br />
            <br />
            <br />
            Keep scrolling and welcome to Chernoby Gopniks.
          </p>
          <div className='h64' />
          <button className='mint-btn' {...SCROLL_BEHAVIOUR}></button>
          <h1 {...SCROLL_BEHAVIOUR} className='gold mt-5'>
            WHAT UTILITY DOES MY GOPNIK HAVE?
          </h1>
          <div className='chapters tj w-50 ma'>
            <h1 {...SCROLL_BEHAVIOUR}>
              <span className='gold'>Chapter one:</span>
            </h1>

            <ul className='_style' {...SCROLL_BEHAVIOUR}>
              <li>
                <h2> Mint Legendary Gopniks</h2>
              </li>
              <li>
                <h2>Gamble in the Boris Casino</h2>
              </li>
              <li>
                <h2>Enter Beauty Contests</h2>
              </li>
              <li>
                <h2>Access to Secondary Market</h2>
              </li>
              <li>
                <h2>Rarity Chart</h2>
              </li>
            </ul>
            <h1 {...SCROLL_BEHAVIOUR}>
              <span className='gold'>Chapter two:</span>
            </h1>
            <ul className='_style' {...SCROLL_BEHAVIOUR}>
              <li>
                <h2>Stake Gopnik Event</h2>
              </li>
              <li>
                <h2>Receive Chernobyl Drop</h2>
              </li>
              <li>
                <h2>$SLAV tokens for Bunker Marketplace</h2>
              </li>
            </ul>
            {/* <h2 {...SCROLL_BEHAVIOUR}>
              - Stake Gopnik Event <br />
              - Receive Chernobyl Drop <br />- $SLAV tokens for Bunker
              Marketplace
            </h2> */}
            <h1 {...SCROLL_BEHAVIOUR}>
              <span className='gold'>Chapter three:</span>
            </h1>

            <ul className='_style' {...SCROLL_BEHAVIOUR}>
              <li>
                <h2>Mutate into a Chernobyl Gopnik</h2>
              </li>
              <li>
                <h2>Trade him</h2>
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
            <h1 {...SCROLL_BEHAVIOUR}>
              <span className='gold'>Chapter four:</span>
            </h1>
            <ul className='_style _style_x' {...SCROLL_BEHAVIOUR}>
              <li>
                <h2>Road map Reveal 15 Februari</h2>
              </li>
            </ul>
          </div>
          <img
            {...SCROLL_BEHAVIOUR}
            src={gopniksGif}
            alt=''
            className='gopin-size'
          />
          <h1 className='gold'>100% Fair and Randomized</h1>
          <p {...SCROLL_BEHAVIOUR} className='tj mt-2'>
            Minting using latest Solana Candy Machine v2.0. No more bot or team
            sniping, fair for everyone
          </p>
          <h1 className='mt-5' {...SCROLL_BEHAVIOUR}>
            <span className='gold'>mint live end:</span> 24th jan
          </h1>
          <h1 {...SCROLL_BEHAVIOUR} className='gold mt-2'>
            HIDDEN INSIDE THE MINT MACHINE:
          </h1>
          <p {...SCROLL_BEHAVIOUR} className='tj mt-2'>
            Get lucky while minting and get one of the 52 Legendary Gopniks
            among 5555. Keep an eye open for these:
          </p>

          <div className='h64' />
          <h1 {...SCROLL_BEHAVIOUR} className='gold'>
            Golden Gopnik
          </h1>
          <img
            {...SCROLL_BEHAVIOUR}
            src={Golden_gopnn}
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
          <h1 {...SCROLL_BEHAVIOUR} className='gold'>
            50 Golden Shoe Gopnik
          </h1>
          <p {...SCROLL_BEHAVIOUR} className='tj mt-3'>
            50 of the rarest Gopniks, outfitted with Slav’s best shoes.
          </p>
          <div className='h64' />
          <div {...SCROLL_BEHAVIOUR} className='traits tl '>
            <table>
              <tbody>
                <tr>
                  <td>
                    <h2 {...SCROLL_BEHAVIOUR} className='gold'>
                      Traits / Attributes
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
          <h1 className='tl' {...SCROLL_BEHAVIOUR}>
            <span className='gold'>ROAD MAP</span> chapter 1
          </h1>
          <ul className='_style _style_x' {...SCROLL_BEHAVIOUR}>
            <li>
              <h2>BEGIN MINTING</h2>
            </li>
            <li>
              <h2>FIRST 100 MINT 2x</h2>
            </li>
          </ul>
          <h2 className='tl' {...SCROLL_BEHAVIOUR}>
            1000 MINTS EVENT: BORIS CASINO OPEN
          </h2>

          <div className='h64'></div>
          <a
            className='gold wf ma h2'
            {...SCROLL_BEHAVIOUR}
            href='https://discord.gg/Ns9qXDCv6Z'
          >
            JOIN DISCORD
          </a>
          <h2 {...SCROLL_BEHAVIOUR}>FOLLOW TWITTER</h2>
        </div>
      </div>

      <div className='boris_section'>
        <img {...SCROLL_BEHAVIOUR} className='boris_bg' src={borisBG} alt='' />
        <div className='w tc'>
          <h1 {...SCROLL_BEHAVIOUR} className='gold'>
            BORIS RUSSIAN roulette CLUB at the Casino. BORIS Casino
          </h1>
          <p className='tj' {...SCROLL_BEHAVIOUR}>
            Bring your gopnik and gamble on boris hazard den, every saturday at
            discord:
          </p>
          <div className='h32' />

          <div className='member-link'>
            <img {...SCROLL_BEHAVIOUR} src={borisCard} alt='' />
            <div className='members-link'>
              <h1 {...SCROLL_BEHAVIOUR}>MEMBERS ONLY</h1>
              <p {...SCROLL_BEHAVIOUR}>
                Join discord gamble room here:
                <br />
                <a
                  {...SCROLL_BEHAVIOUR}
                  className='gold'
                  href='https://discord.gg/Ns9qXDCv6Z'
                >
                  https://discord.gg/Ns9qXDCv6Z
                </a>
              </p>
            </div>
          </div>
          <div className='h32' />
          <h1 {...SCROLL_BEHAVIOUR} className='gold'>
            BORIS GAMES
          </h1>
          <p className='tj' {...SCROLL_BEHAVIOUR}>
            bring your gopnik, come play and be amused by our seductive russian
            dancers. Sveta and Yulia are waiting for you, in tiny little
            attires. And remember, what happens in Gopnik landstays in Gopnik
            land. Nu, davaj.
          </p>
        </div>

        <div className='w w-50 dfw tc'>
          <div {...SCROLL_BEHAVIOUR} className='card'>
            <img src={pistol} alt='' />
            <p>
              russian roulette <br /> <span className='gold'>odds: 6/7</span>
            </p>
          </div>
          <div {...SCROLL_BEHAVIOUR} className='card'>
            <img src={hand} alt='' />
            <p>
              gopink fight <br /> <span className='gold'>odds: 1/2</span>
            </p>
          </div>
          <div {...SCROLL_BEHAVIOUR} className='card'>
            <img src={vsimg} alt='' />
            <p>
              beauty contest <br /> <span className='gold'>odds: 1/2</span>
            </p>
          </div>
          <div {...SCROLL_BEHAVIOUR} className='card'>
            <img src={band} alt='' />
            <p>
              boris bandit <br /> <span className='gold'>odds: ???</span>
            </p>
          </div>
          <div className='h32'></div>
          <h1 {...SCROLL_BEHAVIOUR} className='gold tc w-100'>
            COMMUNITY CHEST
          </h1>
          <p {...SCROLL_BEHAVIOUR} className='tj'>
            <span>15% </span>
            of all Gopniks will belong to the house when the mint is over. These
            are the gopniks you can win from Boris. the plan is to scam Boris of
            all his Gopniks. Can you do it?
          </p>
          <img
            {...SCROLL_BEHAVIOUR}
            className='gopin-size'
            src={dollar}
            alt=''
          />
          <div className='h32' />
          <h1 {...SCROLL_BEHAVIOUR} className='gold tc w-100'>
            BORIS
          </h1>
          <img
            {...SCROLL_BEHAVIOUR}
            className='gopin-size'
            src={borisSign}
            alt=''
          />
          <p {...SCROLL_BEHAVIOUR} className='tj'>
            This is the one hell of a furry bear you don’t want to mess with. OG
            Boris, captured as a young cub and soon thereafter an escapee, is
            now the most feared Gopnik of the night.
          </p>

          <div className='h64' />

          <h1 {...SCROLL_BEHAVIOUR} className='gold ma'>
            beauty contest
          </h1>

          <p {...SCROLL_BEHAVIOUR} className='tc'>
            Did you mint theprettiest GOPNIK?
            <br />
            <br />
            JOIN OUR WEEKLY COMPETITIONAND BATTLE THE COMMUNITY FOR REWARDs.
            <br />
            <br />
            THIS IS A COMMUNTY DRIVENDAO AND HOLDERS VOTEFOR THE WINNERS
          </p>

          <img
            {...SCROLL_BEHAVIOUR}
            src={contestImg}
            alt=''
            className='gopin-size'
          />
        </div>

        <div className='h64' />
        <img
          {...SCROLL_BEHAVIOUR}
          className='w-100'
          src={burningForest}
          alt=''
        />
      </div>
    </div>
  )
}
