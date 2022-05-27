import './nav.css'
import { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson, BsJournalBookmark, BsChatQuote } from 'react-icons/bs';
import { RiHeartPulseLine } from 'react-icons/ri';

const Nav = () => {

  const [presentSection, setPresentSection] = useState('home');

  return (
    <nav>
      <a 
        href="#" 
        className={presentSection === 'home' ? 'active' : ''}
        onClick={() => setPresentSection('home')}>
          <AiOutlineHome />
      </a>
      <a 
        href="#about" 
        className={presentSection === 'about' ? 'active' : ''}
        onClick={() => setPresentSection('about')}>
          <BsPerson />
      </a>
      <a 
        href="#experience" 
        className={presentSection === 'experience' ? 'active' : ''}
        onClick={() => setPresentSection('experience')}>
          <BsJournalBookmark />
      </a>
      <a
        href="#services" 
        className={presentSection === 'services' ? 'active' : ''}
        onClick={() => setPresentSection('services')}>
          <RiHeartPulseLine /> 
      </a>
      <a 
        href="#contact" 
        className={presentSection === 'contact' ? 'active' : ''}
        onClick={() => setPresentSection('contact')}>
          <BsChatQuote />
      </a>
    </nav>
  )
}

export default Nav