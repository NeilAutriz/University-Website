import '../Contact/Contact.css'
import messageIcon from '../../assets/msg-icon.png'
import mailIcon from '../../assets/mail-icon.png'
import locationIcon from '../../assets/location-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6fa728b7-a840-48e7-9c41-a3089981c73f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-division" id='contact'>
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
            <form className='contact-form' onSubmit={onSubmit}>
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
            <span>{result}</span>
        </div>
    </div>
      
  )
}

export default Contact
