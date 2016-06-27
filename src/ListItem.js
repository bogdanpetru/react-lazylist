import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    const {
      rowHeight,
      renderRow,
      realIndex,
      index
    } = this.props

    const translateY = (realIndex * rowHeight) - ((index + 1) * rowHeight)

    return <div
      style={{
        transform: `translateY(${translateY}px)`,
        height: rowHeight
      }}
    >
      {renderRow()}
    </div>
  }
}


export default ListItem
