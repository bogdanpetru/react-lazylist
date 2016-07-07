import React, { Component, PropTypes } from 'react'
import ListItem from './ListItem'
import getRowsRangeToRender from './getRowsRangeToRender'

import prepareStyle from './prepareStyle'

class LazyList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollTop: 0
    }
  }

  render () {
    const {
      items,
      renderRow,
      bodyStyle,
      style,

      //
      rowHeight,
      height,

    } = this.props


    const scrollTop = this.getScrollTop()

    const {
      from,
      to
    } = getRowsRangeToRender({
      height,
      rowHeight,
      scrollTop
    })

    const startIndex = 0;

    return <div style={style}
      ref="virtualScroller"
      // I know, I don't like this either
      // I think I will move the scrollTop to state, so it can be controlled.
      onScroll={(event) => this.setState({
        scrollTop: event.target.scrollTop
      })}
    >
      <div className="scrollBody"
        ref="scrollBody"
        style={bodyStyle}
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
      </div>
    </div>
  }


  getScrollTop() {
    return this.state.scrollTop // this means that it is the inital render
  }
}

LazyList.propTypes = {
  renderRow: PropTypes.func,
  rowHeight: 40
}

export default prepareStyle(LazyList)
