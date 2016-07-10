import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    const {
      rowHeight,
      renderRow,
      translateY
    } = this.props

    

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
