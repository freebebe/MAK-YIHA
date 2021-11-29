import PropsTypes from 'prop-types'

const Button = () => {
  return(
    <button style={ButtonCSS} className="btn"></button>
  )
}

const ButtonCSS = {
  backgroundColor: color
}

Button.defaulProps = {
  color: 'lightblue',
}

Button.PropType = {
  color: PropsTypes.string,
  text: PropsTypes.string,
  onClick: PropsTypes.func
}

export default Button
