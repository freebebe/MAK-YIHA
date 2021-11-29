const Dropdown = (onRequestShow, onRequestHide, showing) => {
  const onClick = ((e) => {
    const el = refs.menu
  })
  const onKeyDown = (e) => (e.key === 'Escape' ? hideDropdown : '')
  const onTriggerClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    showing ? hideDropdown : showDropdown
  }
  const hideDropdown = () => {
    onRequestHide()
    document.removeEventListener('click', this._onClick)
    document.removeEventListener('touch', this._onClick)
    this.refs.trigger.focus()
  }

  const showDropdown = () => {
    if (showing) return
    onRequestShow()
    setTimeout(() => {
      document.addEventListener('click', this._onClick)
      document.addEventListener('touch', this._onClick)
      this.refs.menu.focus()
    }, 0)
  }


  return (
    <div className='Menu' style={template.container}>
      {triggerClone}
      <div className='Menu__container' style={menuStyle}>
        {showing && <div tabIndex='0' />}
        {arrow && <div style={template.arrow} />}
        <ul className='Menu__list' onKeyDown={::this.onKeyDown}
        ref='menu'
        role='menu'
        tabIndex='-1'
        aria-hidden={this.props.showing ? 'false' : 'true'}
        aria-describedby={uniqueId}
        style={template.list}>
        {React.Children.map(this.props.children, ::this.renderChild)}
      </ul>
      {showing && <div tabIndex='0' />}
    </div>
    </div >
  )
}

Dropdown.propTypes = {
  showing: PropTypes.bool.isRequired,
  onRequestHide: PropTypes.func.isRequired,
  onRequestShow: PropTypes.func.isRequired,
  activeIndex: PropTypes.number,
  trigger: PropTypes.node.isRequired,
  autoHideOnClick: PropTypes.bool,
  arrow: PropTypes.bool,
  align: PropTypes.oneOf(['center', 'left', 'right']),
  uniqueId: PropTypes.string.isRequired,
  template: PropTypes.object
}

Dropdown.defaultProps = {
  align: 'center',
  arrow: false,
  autoHideOnClick: true,
  template: defaultStyles
}
