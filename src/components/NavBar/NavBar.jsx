import '../NavBar/NavBar.css'
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll';

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
        <li className='nav-list-item'>
          <Link to='home' smooth={true} offset={0}>Home</Link>
        </li>
        <li className='nav-list-item'>
          <Link to='program' smooth={true} offset={-267}>Program</Link>
        </li>
        <li className='nav-list-item'>
          <Link to='about' smooth={true} offset={-170}>About</Link>
        </li>
        <li className='nav-list-item'>
          <Link to='gallery' smooth={true} offset={-250}>Gallery</Link>
        </li>
        <li className='nav-list-item'>
          <Link to='testimonial' smooth={true} offset={-290}>Testimonials</Link>
        </li>
        <li className='nav-list-item'>
          <Link className='contact-button' to='contact' smooth={true} offset={-270}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
