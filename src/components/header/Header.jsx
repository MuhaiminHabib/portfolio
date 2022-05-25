import Cta from './Cta'
import './header.css'
import HeroText from './HeroText'
import Socials from './Socials'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__text'>
        <HeroText />
      </div>
      <div className="header__cta">
        <Cta />
      </div>
      <div className='header__socials'>
        <Socials />  
      </div> 
    </header>
    


  )
}

export default Header