import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Message.css'
import { useState } from 'react';
import {motion} from 'framer-motion'

const Message = () => {
    const form = useRef();
    const [done,setDone]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p543dm4', 'template_ze1o4em', form.current, 'wclBmHQ3Zqcpy_Ojh')
      .then((result) => {
          console.log(result.text);
          setDone('true');
      }, (error) => {
          console.log(error.text);
      });
  };
  const transition={duration:5,type:'spring'};
  return (
    <div className='message' id='Contact'>
        <motion.div
        initial={{left:'-20%'}}
        whileInView={{left:'0%'}}        
        transition={transition}
         className='m-left'>
                <span className='l1'>Get in touch</span>
                <span className='l2'>Contact me</span>
                <div className='blur s-blurl'
                    style={{background:"var(--purple)"}}></div>
        </motion.div>
        <motion.div
        initial={{bottom:'-20%'}}
        whileInView={{bottom:'0%'}}        
        transition={transition}
         className='m-right'>
                <form ref={form} onSubmit={sendEmail} >
                    <input type="text" name='user_name' className='user' placeholder='Name'/>
                    <input type="email" name='user_email' className='user' placeholder='Email'/>
                    <textarea name='message' className='user' placeholder='Message'/>
                    <input type='submit' value='send' className='button'/>
                    <span>{done && 'Thanks for contacting me!'}</span>
                    
                </form>
        </motion.div>

    </div>
  )
}

export default Message