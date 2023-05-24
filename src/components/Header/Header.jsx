import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div id='header'>
      <Link to={'/'}>
        <div id='logo'><img id='imgLogo' src="https://sadaat.co/wp-content/uploads/2019/03/real-estate-png-free-real-estate-logo-design-999.png" alt="" /></div>
      </Link>
      <Link to={'/'}>
        <div className='header' id='homePage'>Home Page</div>
      </Link>
      <Link to={'/assets'}>
        <div className='header' id='assets'>Assets</div>
      </Link>
      <Link to={'/login'}>
        <div className='header' id='login'>Login</div>
      </Link>
      <Link to={'/myAssets'}>
        <div className='header' id='login'>My Assets</div>
      </Link>
      <select name="" id="language">
        <option value="EN">English (UK)</option>
        <option value="HEB">Hebrew</option>
      </select>

      <select name="" id="languageMedia">
        <option value="EN">En</option>
        <option value="HEB">Heb</option>
      </select>
    </div>
  )
}
export default Header