// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundBgColor = isDarkTheme
        ? 'notfound-dark-bg'
        : 'notfound-light-bg'

      const notFoundHeadingClassName = isDarkTheme
        ? 'not-found-light-heading'
        : 'not-found-dark-heading'

      const noFoundParaClassName = isDarkTheme
        ? 'not-found-error-light-text'
        : 'not-found-error-dark-text'

      return (
        <div className={`${notFoundBgColor}`}>
          <Navbar />
          <div className="not-found-response-container">
            <div className="not-found-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found"
              />
              <h1 className={`not-found-heading ${notFoundHeadingClassName}`}>
                Lost Your Way?
              </h1>
              <p className={`not-found-para ${noFoundParaClassName}`}>
                we cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
