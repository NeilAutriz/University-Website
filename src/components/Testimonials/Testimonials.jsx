import '../Testimonials/Testimonials.css'
import next from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import user1  from '../../assets/user-1.png'
import user2  from '../../assets/user-2.png'
import user3  from '../../assets/user-3.png'
import user4  from '../../assets/user-4.png'



const Testimonials = () => {
  return (
      <div className='testimonial-container'>
          <img src={back} className='back-button' />
          <img src={next} className='next-button' />
          <div className="slider">
              <ul className='slide-container'>
                  <li className='slide-card'>
                      <div className="slide-header-card">
                          <img src={user1} className='slide-image' />
                          <div className="slide-header-text">
                            <h1 className='slide-name'>Emily Williams</h1>
                            <p className='slide-location'>Educity, USA</p>
                          </div>
                      </div>
                      <p className='slide-detail'> Choosing to pursue my degree at Educity was one of the best experiences that I have encountered throughout my career which allowed me to unleash my potential. </p>
                </li>
                
                <li className='slide-card'>
                    <div className="slide-header-card">
                        <img src={user2} className='slide-image' />
                        <div className="slide-header-text">
                        <h1 className='slide-name'>Emily Williams</h1>
                        <p className='slide-location'>Educity, USA</p>
                        </div>
                    </div>
                    <p className='slide-detail'> Choosing to pursue my degree at Educity was one of the best experiences that I have encountered throughout my career which allowed me to unleash my potential. </p>
                </li>
                
                <li className='slide-card'>
                    <div className="slide-header-card">
                        <img src={user3} className='slide-image' />
                        <div className="slide-header-text">
                        <h1 className='slide-name'>Emily Williams</h1>
                        <p className='slide-location'>Educity, USA</p>
                        </div>
                    </div>
                    <p className='slide-detail'> Choosing to pursue my degree at Educity was one of the best experiences that I have encountered throughout my career which allowed me to unleash my potential. </p>
                </li>
                  
                <li className='slide-card'>
                    <div className="slide-header-card">
                        <img src={user4} className='slide-image' />
                        <div className="slide-header-text">
                        <h1 className='slide-name'>Emily Williams</h1>
                        <p className='slide-location'>Educity, USA</p>
                        </div>
                    </div>
                    <p className='slide-detail'> Choosing to pursue my degree at Educity was one of the best experiences that I have encountered throughout my career which allowed me to unleash my potential. </p>
                </li>
                  


              </ul>              
          </div>
      </div>
  )
}

export default Testimonials