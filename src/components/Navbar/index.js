// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const navbarBgColor = isDarkTheme ? 'navbar-bg-dark' : 'navbar-bg-light'
      const navTextColor = isDarkTheme
        ? 'navbar-text-dark'
        : 'navbar-text-light'

      const websiteImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const onToggleTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={`nav-bar-heading ${navbarBgColor}`}>
          <img
            src={websiteImageUrl}
            alt="website logo"
            className="website-logo"
          />
          <ul className="home-about-container">
            <li className="list-item ">
              <Link to="/" className={`link ${navTextColor}`}>
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link to="/about" className={`link ${navTextColor}`}>
                About
              </Link>
            </li>
          </ul>
          <button
            className="theme-button"
            type="button"
            onClick={onToggleTheme}
            testid="theme"
          >
            <img src={themeImageUrl} alt="theme" className="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
