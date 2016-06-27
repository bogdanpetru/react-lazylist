import React, { Component, PropTypes } from 'react'
import ListItem from './ListItem'
import getRowsRangeToRender from './getRowsRangeToRender'

class LazyList extends Component {
  render () {
    const {
      items,
      height,
      rowHeight,
      renderRow
    } = this.props

    const scrollBodyHeight = items.length * rowHeight

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

    // const {
    //   from,
    //   to
    // } = getRowsRangeToRender({
    //   height,
    //   rowHeight,
    //   scrollTop
    // })

    const startIndex = 0;

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
          items
            .map((item, index) => {
              // const realIndex = index + startIndex
              const key = `row-item-${index}`

              return <ListItem
                {...item}
                key={key}
                renderRow={renderRow}
                index={index}
                realIndex={index}
              />
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
  renderRow: PropTypes.func
}

export default LazyList
