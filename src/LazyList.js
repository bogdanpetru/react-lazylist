import React, { Component, PropTypes } from 'react';
import getRowsRangeToRender from './getRowsRangeToRender'


class ListItem extends Compoent {
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

class LazyList extends Component {
  render () {
    const {
      rows,
      height,
      rowHeight
    } = this.props

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

    const {
      from,
      to
    } = getRowsRangeToRender({
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
        {
          rows.slice(from, to)
            .map((item, indwx) => {
              const realIndex = index + startIndex
              const key = `row-item-${realIndex}`

              return <ListItem {...item} key={key} />
            })
        }
      </div>
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
