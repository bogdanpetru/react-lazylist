import React, { Component, PropTypes } from 'react'
import pureRender from './utils/pureRender'

class ListItem extends Component {
  render() {
    const {
      height,
      minHeight,
      renderItem,
      translateY,
    } = this.props

    let style = {
      transform: `translateY(${translateY}px)`,
    }

    if (height) {
      style.height = height
    }

    if (minHeight) {
      style.minHeight = minHeight
    }

    return <div
      style={style}
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
  height: PropTypes.number,
  minHeight: PropTypes.number,
  translateY: PropTypes.number,
}

export default pureRender(ListItem)
