import '../About/About.css'
import about from '../../assets/about.png'
import playIcon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className="about-container">
        <div className="about-left">
            <img src={about} className='about-image'/>
            <img src={playIcon} className='about-icon-play'/>
        </div>
        <div className="about-right">
            <div className="univ-deets">
                <h3>About University</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Embark on transformative educational journey with our university's comprehensive educational programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
                <p>With a focus on innovation, hands-on learning, and personalized internship prepares the aspiring educators to make a meaningful impact in classrooms, schools and communities.</p>
                <p>Whether you aspire to become a teacher, administrator, counselor or educational leader our diverse range of programs offers the perfect pathway to achieve your goals and unlock your potential.</p>
            </div>
        </div>
    </div>
      
  )
}

export default About
