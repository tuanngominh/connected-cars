import React, {Component, PropTypes} from 'react'

class Header1 extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  }
  render() {
    return (
      <h1 {...this.props}>
        {this.props.children}
      </h1>
    )
  }
}

export default Header1