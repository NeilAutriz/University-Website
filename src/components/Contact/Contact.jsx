import '../Contact/Contact.css'
import messageIcon from '../../assets/msg-icon.png'
import mailIcon from '../../assets/mail-icon.png'
import locationIcon from '../../assets/location-icon.png'
import phoneIcon from '../../assets/phone-icon.png'



const Contact = () => {
  return (
    <div className="contact-division">
        <div className="contact-left">
            <h3>Send us a message <img src={messageIcon} className='message-icon'/></h3>
            <div className="message-contact">
                <p className='contact-message'>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide     exceptional service to our university community.</p>
            </div>
            <ul className='info-container'>
                <li><img src={mailIcon} className='contact-icon'/>Contact@GreatStack.dev</li>
                <li> <img src={phoneIcon} className='contact-icon'/>+1 123-456-7890</li>
                <li> <img src={locationIcon} className='contact-icon'/>77 Massachusetts Ave, Cambridge MA 02139, United States</li>
            </ul>
        </div>
        <div className="contact-right">
            <form className='contact-form'>
                <label>Your Name</label>
                <input type='text' name='name' required placeholder='Enter your name' className='form-input'/>
                <label>Phone Number</label>
                <input type='tel' name='telnumber' required placeholder='Enter your mobile number' className='form-input'/>
                <label>Your Email</label>
                <input type='email' name='email' required placeholder='Enter your email' className='form-input'/>
                <label>Write your messages here</label>
                <textarea rows="6" name='message' required placeholder='Enter your message' className='form-input'/>
                <button className='submit-form-button'>Submit Now</button>

            </form>
        </div>
    </div>
      
  )
}

export default Contact
