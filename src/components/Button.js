import React, {Component, PropTypes} from 'react'

class Button extends Component {
  static propTypes = {
    type: React.PropTypes.oneOf(['button', 'reset', 'submit']),
    name: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func    
  }
  render() {
    return (
      <button {...this.props}>
        {this.props.children}
      </button>
    )
  }
}

export default Button