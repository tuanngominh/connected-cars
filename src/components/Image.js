import React, {Component, PropTypes} from 'react'

class Image extends Component {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string
  }
  render() {
    return (
      <img {...this.props} />
    )
  }
}

export default Image