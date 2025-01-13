import '../NavBar/NavBar.css'
import logo from '../../assets/logo.png'

const NavBar = () => {
  return (  
    <nav className='nav-container'>
        <img src={logo} className='nav-logo'/>
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
