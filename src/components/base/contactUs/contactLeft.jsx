'use client'

import { useState } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const ContactLeft = (props = {}) => {
  const [user_name, setUserName] = useState('')
  const [user_email, setUserEmail] = useState('')
  const [user_message, setUserMessage] = useState('')

  function handleClick() {
    if (user_name == '' || user_email == '' || user_message == '') {
      toast.error('Please Complete All Form Fields First.')
    }
    else {
      emailjs.send(
        "service_1v595rc",
        "template_d5g7ccn",
        {
          user_name,
          user_email,
          user_message
        },
        "KIXAtcAL183NMRhd8"
      ).then(function (response) {
        toast.success('Your Responce Send Successfully!')
      }, function (error) {
        toast('Your Responce Sending Process Failed!')
      });
      setUserName("")
      setUserEmail("")
      setUserMessage("")
    }
  }
  return (
    <section className={`${props.className} bg-darkColor md:rounded-l-lg`}>
      <section className='w-3/5 mx-auto my-10 flex flex-col items-center gap-5 text-white'>
        <section className="w-full flex flex-col gap-2">
          <label className="ml-1 font-semibold text-sm" htmlFor="Full_Name">FULL NAME</label>
          <input value={user_name} onChange={(e)=> setUserName(e.target.value)} id="Full_Name" className='placeholder:text-darkColor text-darkColor placeholder:opacity-70  border-2 bg-bg h-10 py-5 px-2 focus-within:outline-none rounded-lg' type="text" placeholder='Full Name' />
        </section>
        <section className="w-full flex flex-col gap-2">
          <label className="ml-1 font-semibold text-sm" htmlFor="Email">EMAIL</label>
          <input className='placeholder:text-darkColor text-darkColor placeholder:opacity-70 w-full border-2 bg-bg h-10 py-5 px-2 focus-within:outline-none rounded-lg' type="email" onChange={(e) => setUserEmail(e.target.value)} value={user_email} name="email" id="email" placeholder='Email' />
        </section>
        <section className="w-full flex flex-col gap-2">
          <label className="ml-1 font-semibold text-sm" htmlFor="Message">MESSAGE</label>
          <textarea className='placeholder:text-darkColor text-darkColor w-full border-2 bg-bg h-[100px] p-2 focus-within:outline-none rounded-lg' name="message" onChange={(e) => setUserMessage(e.target.value)} value={user_message} cols="30" rows="10" placeholder='Message' id='Message'></textarea>
        </section>
        <button className='py-3 px-7 mt-2 w-full border-4 bg-bg-dark text-white rounded-full' onClick={handleClick}>Submit</button>
      </section>
    </section>
  );
}

export default ContactLeft;
