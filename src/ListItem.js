import React, { Component } from 'react'
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


export default pureRender(ListItem)
