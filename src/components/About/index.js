// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBgClassName = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      const aboutHeadingClassName = isDarkTheme
        ? 'about-heading-dark'
        : 'about-heading-light'

      const aboutImageUrlClassName = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <div className={`about-bg-container ${aboutBgClassName}`}>
          <Navbar />
          <div className="about-response-container">
            <div className="about-container">
              <img src={aboutImageUrlClassName} alt="about" className="about" />
              <h1 className={`about-heading ${aboutHeadingClassName}`}>
                About
              </h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
