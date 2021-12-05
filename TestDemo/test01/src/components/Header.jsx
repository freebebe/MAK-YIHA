import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return(
    <header className="header">
      <h1 style={HeaderCSS}>
        {title}
      </h1>
      <Button
        color={showAdd ? 'darkred' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
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
