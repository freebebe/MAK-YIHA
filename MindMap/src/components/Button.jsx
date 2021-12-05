import PropTypes from 'prop-types'

const ButtonElements = (addNode) => {
  return(
    <button
      onClick={addNode}
      style={color, backgroundColor}
    >
    </button>
  )
}

ButtonElements.defaultProps = {
  text: 'test',
  color: '#fff',
  backgroundColor: 'pink'
}

ButtonElements.protoTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.string,
}

export default ButtonElements
