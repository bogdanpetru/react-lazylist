import React, { Component, PropTypes } from 'react'
import ListItem from './ListItem'
import getRowsRangeToRender from './getRowsRangeToRender'
import ScrollBody from './ScrollBody'

class LazyList extends Component {
  render () {
    const {
      data,
      renderRow,
      rowHeight,

      // style
      style,
      className,

      scrollBodyStyle,
      scrollBodyClassName,

    } = this.props

    const startIndex = 0;

    return <div
      className={`react-lazylist ${className}`}
      style={style}
      ref="virtualScroller"
      onScroll={(event) => this.setState({ scrollTop: event.target.scrollTop })}
    >
      <ScrollBody
        style={scrollBodyStyle}
        className={scrollBodyClassName}
      >
      {
        items
        .slice(from, to)
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
      </ScrollBody>
    </div>
  }

}

LazyList.propTypes = {
  renderRow: PropTypes.func,
  rowHeight: PropTypes.number
}

export default LazyList
