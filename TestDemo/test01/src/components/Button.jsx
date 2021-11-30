import PropsTypes from 'prop-types'

const Button = ({color}) => {
  return(
    <button 
    style={{backgroundColor: color}}
    className="btn"></button>
  )
}

Button.defaulProps = {
  color: 'steelblue',
}

Button.PropType = {
  color: PropsTypes.string,
  text: PropsTypes.string,
  onClick: PropsTypes.func
}

export default Button
