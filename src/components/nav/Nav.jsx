import './nav.css'
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson, BsJournalBookmark, BsChatQuote } from 'react-icons/bs';
import { RiHeartPulseLine } from 'react-icons/ri';

const Nav = () => {
  return (
    <nav>
      <a href=""><AiOutlineHome /></a>
      <a href=""><BsPerson /></a>
      <a href=""><BsJournalBookmark /></a>
      <a href=""><RiHeartPulseLine /></a>
      <a href=""><BsChatQuote /></a>
    </nav>
  )
}

export default Nav