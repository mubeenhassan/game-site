import React from 'react'
import '../assests/style/navbar.css'
import gopniksText from '../assests/images/gopniks.png'
export default function Navbar() {
  const toggle = () => {
    const nav = document.getElementById('topnav')
    nav.className === 'topnav'
      ? (nav.className += ' responsive')
      : (nav.className = 'topnav')
  }
  return (
    <nav className='topnav' id='topnav'>
      <a href='#chapter_01'>chapter 01</a>
      <a href='#chapter_02'>chapter 02</a>
      <a href='#chapter_03'>chapter 03</a>
      <a href='#chapter_04'>chapter 04</a>
      <a href='#team'>team</a>
      <a href='#'>discord</a>
      <a href='#'>twitter</a>
      <a href='#'>medium</a>
      <a href='#'>mint</a>
      <button className='icon' onClick={toggle}>
        <i className='fa fa-bars'></i>
      </button>
    </nav>
  )
}
