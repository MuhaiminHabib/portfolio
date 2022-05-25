import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='socials__container'>
        <a href='#' target='_blank'><BsLinkedin /></a>
        <a href='#' target='_blank'><BsGithub /></a>
        <a href='#' target='_blank'><BsFacebook /></a> 
        <p className="line"></p>

    </div>
  )
}

export default Socials;