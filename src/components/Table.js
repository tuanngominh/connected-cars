import React, {Component, PropTypes} from 'react'

class Table extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string 
  }
  render() {
    return (
      <table {...this.props}>
        {this.props.children}
      </table>
    )
  }
}

export default Table