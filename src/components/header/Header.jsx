import CenterImage from './CenterImage'
import Cta from './Cta'
import './header.css'
import HeroText from './HeroText'
import Scroll from './Scroll'
import Socials from './Socials'

const Header = () => {
  return (
    <header className='header section'>
      <div className='header__text subsection'>
        <HeroText />
      </div>
      <div className="header__cta subsection">
        <Cta />
      </div>
      <div className="centerImage subsection">
        <CenterImage />
      </div>
      <div className="header__socials subsection">
        <Socials />  
      </div> 
      <div className="header__scroll subsection">
        <Scroll />
      </div>
    </header>
  )
}

export default Header