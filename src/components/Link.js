import React, {Component, PropTypes} from 'react'

class Link extends Component {
  static propTypes = {
    href: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    target: PropTypes.string
  }
  render() {
    return (
      <a {...this.props}>
        {this.props.children}
      </a>
    )
  }
}

export default Link