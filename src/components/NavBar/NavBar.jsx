import '../NavBar/NavBar.css'
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'

const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 400 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <nav className={`nav-container ${sticky == true ? 'dark-nav' : ''}`}>
      <img src={logo} className='nav-logo' />
      <ul className='nav-list'>
        <li className='nav-list-item'>Home</li>
        <li className='nav-list-item'>Program</li>
        <li className='nav-list-item'>About</li>
        <li className='nav-list-item'>Campus</li>
        <li className='nav-list-item'>Testimonials</li>
        <li className='nav-list-item'>
          <button className='contact-button'>Contact Us</button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
