import React, { Component, PropTypes } from 'react'
import pureRender from './utils/pureRender'

class ListItem extends Component {
  render() {
    const {
      itemHeight,
      renderItem,
      translateY
    } = this.props

    return <div
      style={{
        transform: `translateY(${translateY}px)`,
        height: itemHeight
      }}
    >
      {renderItem(this.props)}
    </div>
  }
}

ListItem.defaultProps = {
  renderItem: () => {}
}

ListItem.propTypes = {
  renderItem: PropTypes.func,
  itemHeight: PropTypes.number,
  translateY: PropTypes.number
}

export default pureRender(ListItem)
