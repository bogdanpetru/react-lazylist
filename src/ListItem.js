import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    const {
      rowHeight,
      renderRow
    } = props

    const translateY = (realIndex * rowHeight) - ((index + 1) * rowHeight)

    return <div key={key}
      style={{
        transform: `translateY(${translateY}px)`,
        height: rowHeight
      }}
    >
      {renderRow(row, rows, realIndex, props)}
    </div>
  }
}
