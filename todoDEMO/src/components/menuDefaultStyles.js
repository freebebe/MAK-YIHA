const defaultStyles = {
  menu: {
    position: 'absolute',
    top: '100%',
    padding: 0,
    width: '200px'
  },
  menuHidden: {
    display: 'none',
    zIndex: '-1'
  },
  menuVisible: {
    display: 'block',
    zIndex: 500
  },
  container: {
    position: 'relative',
    display: 'inline-block'
  },
  alignRight: {
    right: 0
  },
  alignLeft: {
    left: 0
  },
  alignCenter: {
    left: '50%',
    transform: 'translateX(-50%)'
  },
  arrow: {
    width: 0,
    height: 0,
    border: '5px solid transparent',
    borderTopWidth: 0,
    marginTop: '5px',
    padding: 0,
    position: 'absolute',
    top: '10px',
    left: '50%',
    marginLeft: '-5px',
    borderBottomColor: '#999'
  },
  list: {
    padding: 0,
    paddingTop: '5px',
    paddingBottom: '5px',
    margin: 0,
    backgroundColor: 'white',
    border: '1px solid #ddd',
    outline: 'none'
  }
}
const createTemplate = (styles = {}) => {
  return assign({}, defaultStyles, styles)
}

export default createTemplate
