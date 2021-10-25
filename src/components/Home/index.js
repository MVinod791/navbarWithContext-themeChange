// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgColor = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'
      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeTextColor = isDarkTheme ? 'home-dark-text' : 'home-text-light'
      return (
        <div className={`home-bg-container ${homeBgColor}`}>
          <Navbar />
          <div className="home-response-container">
            <div className="home-container">
              <img src={homeImageUrl} alt="home" className="home" />
              <h1 className={`home-heading ${homeTextColor}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
