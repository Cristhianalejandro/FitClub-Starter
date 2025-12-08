import React from 'react'
import './JoinUs.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';



function JoinUs() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v76p8l7', 'template_0hmvfqo', form.current, {
        publicKey: 'cjuG7YpPHz6IshE0p',
      }) 
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='Join' id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>RADY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your Email here' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
      
    </div>
  )
}

export default JoinUs
