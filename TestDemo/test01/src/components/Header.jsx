import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd }) => {
  return(
    <header className="header">
      <h1 style={HeaderCSS}>
        {title}
      </h1>
      <Button
        color='green'
        text='Add'
        onClick={onAdd}
      />
    </header>
  )
}

const HeaderCSS = { color: 'darkblue', backgroundColor: 'grey' }

Header.defaultProps = {
  title: "def Title Message",
}

Header.prooTypes = {
  title: PropTypes.string
}

export default Header
