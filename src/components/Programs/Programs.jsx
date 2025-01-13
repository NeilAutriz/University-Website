import '../Programs/Programs.css'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import programIcon1 from '../../assets/program-icon-1.png'
import programIcon2 from '../../assets/program-icon-2.png'
import programIcon3 from '../../assets/program-icon-3.png'


const Programs = () => {
  return (
    <div className='main-program-container'>
          <div className="program">
              <img src={program1} alt='program' />
              <div className="program-indiv-overlay">
              <img src={programIcon1} alt='program icon' />
              Graduation Degree
              </div>
          </div>
          <div className="program">
              <img src={program2} alt='program' />
              <div className="program-indiv-overlay">
              <img src={programIcon2} alt='program icon' />
              Master's Degree
              </div>
          </div>
          <div className="program">
              <img src={program3} alt='program' /> 
              <div className="program-indiv-overlay">
                <img src={programIcon3} alt='program icon' />
                Post Grad Degree
              </div>
          </div>
    </div>
  )
}

export default Programs