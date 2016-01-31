import React, { Component, PropTypes } from 'react';
import getRowsRangeToRender from './getRowsRangeToRender'

class LazyList extends Component {
  render () {
    const props = this.props
    const {rows} = props
    const {height} = props
    const {rowHeight} = props
    const scrollBodyHeight = rows.length * rowHeight

    const style = {
        height,
        overflowY: 'scroll',
        position: 'relative'
      }

    const scrollBodyStyle = {
          height: scrollBodyHeight,
          maxHeight: scrollBodyHeight,
          overflowY: 'hidden',
          overflowX: 'auto',
          boxSizing: 'border-box',
          pointerEvents: 'auto'
        }

    const scrollTop = this.getScrollTop()
    const rowsRangeToRender = getRowsRangeToRender({
      height,
      rowHeight, 
      scrollTop
    })

    return <div style={style}
      ref="virtualScroller"
      // I know, I don't like this either
      // I think I will move the scrollTop to state, so it can be controlled.
      onScroll={() => this.setState({})} 
    >
      <div className="scrollBody"
        ref="scrollBody"
        style={scrollBodyStyle}
      >
        {this.renderRows(rowsRangeToRender, rows, props)}
      </div>
    </div>
  }

  renderRows ({from, to}, rows, props) {
    const rowsToRender = rows.slice(from, to)

    return rowsToRender.map((row, index) => this.renderRow(row, rows, index, from, props))
  }

  renderRow (row, rows, index, startIndex, props) {
    const realIndex = index + startIndex
    const key = `row-item-${realIndex}`
    const {rowHeight} = props
    const translateY = (realIndex * rowHeight) - ((index + 1) * rowHeight)


    return <div key={key}
      style={{
        transform: `translateY(${translateY}px)`,
        height: rowHeight
      }}
    >
      {props.renderRow(row, rows, realIndex, props)}
    </div>
  }

  getScrollTop () {
    if (this.refs.virtualScroller) {
      return this.refs.virtualScroller.scrollTop
    }

    return 0 // this means that it is the inital render
  }
}

LazyList.propTypes = {
  renderRows: PropTypes.func
}

export default LazyList