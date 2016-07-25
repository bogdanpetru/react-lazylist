import React, { Component, PropTypes } from 'react'
import ListItem from './ListItem'
import ScrollBody from './ScrollBody'
import pureRender from './utils/pureRender'
import assign from './utils/assign'
import rangeToRender, { getRelativeRangeToRender } from './utils/rangeToRender'
import getBufferLimits from './utils/getBufferLimits.js'

/**
 * It is responsable for rendering list items
 * TODO:
 * - extract scroll logic into a HOC
 * - extract data manipulateion into a HOC
 */
class LazyList extends Component {
  constructor(props) {
    super(props)

    this.state = {
        scrollTop: props.defaultScrollTop,
        lazylistHeight: 0
    }

    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount() {
    const node = this.refs.lazylist

    if (node) {
      const listHeight = node.offsetHeight;
      const newState = { lazylistHeight: listHeight }
      this.setState(newState)


      this.refreshScrollState(
        this.props.scrollTop || 0,
        listHeight
      )
    }
  }

  render () {
    const {
      data,
      itemHeight,
      minItemHeight,

      // style
      className,
      scrollBodyClassName,

    } = this.props


    const {
      from,
      to
    } = this.state


    const style = assign({}, this.props.style, {
      overflow: 'auto'
    })

    const scrollHeight = this.scrollHeight = data.length * (itemHeight || minItemHeight);
    const scrollBodyStyle = assign({}, this.props.scrollBodyStyle, {
      height: scrollHeight
    })

    const renderItem = typeof this.props.children === 'function' ?
            this.props.children : this.props.renderItem

    return <div
      className={`react-lazylist ${className}`}
      style={style}
      ref="lazylist"
      onScroll={this.onScroll}
    >
      <ScrollBody
        style={scrollBodyStyle}
        className={scrollBodyClassName}
      >
      {
        data
          .slice(from, to)
          .map((item, index) => {
            const realIndex = index + from
            /**
             * TODO: optimize key
             */
            const key = `row-item-${index}`

            /**
             * Items are positioned using translate
             * becuase they have position, we have to add a correction
             * so their position is correct.
             * realIndex * itemHeight will give the correct position
             * if all the rows start at 0, have position absolute.
             */
            const translateCorrection = ((index + 1) * itemHeight) - itemHeight
            const translateY = (realIndex * (itemHeight || minItemHeight)) - translateCorrection

            return <ListItem
              {...item}
              height={itemHeight}
              minHeight={minItemHeight}
              renderItem={renderItem}
              key={key}
              translateY={translateY}
            />
          })
      }
      </ScrollBody>
    </div>
  }

  onScroll(event) {
    const scrollTop = event.target.scrollTop
    const {
      bufferStart,
      bufferEnd,
    } = this.state

    // we have to determine if the buffer is consumed
    if (scrollTop + this.state.lazylistHeight >= bufferEnd || scrollTop <= bufferStart) {
      this.refreshScrollState(scrollTop);
    }
  }

  getFromTo(scrollTop = 0, listHeight) {
   const {
      itemHeight,
      bufferSize
    } = this.props

    const fromToFunction = itemHeight ? rangeToRender : getRelativeRangeToRender

    /**
     * TODO bogdan: add documentation + refactor
     */
    const fromTo = fromToFunction({
      viewportHeight: listHeight || this.state.lazylistHeight,
      itemHeight: itemHeight || this.props.minItemHeight,
      scrollTop,
      bufferSize,
      scrollHeight: this.scrollHeight, // needed if from to is relative and not fixed - see docs
      itemsLength: this.props.data.length,
    })


    return fromTo
  }


  refreshScrollState(scrollTop = 0, listHeight) {
    const {
      from,
      to,
    } = this.getFromTo(scrollTop, listHeight)

    const itemHeight = this.props.itemHeight || this.props.minItemHeight

    const {
      start: bufferStart,
      end: bufferEnd,
    } = getBufferLimits({
      from,
      to,
      itemHeight,
    })

    this.setState({
      from,
      to,
      bufferStart,
      bufferEnd,
    })
  }
}

LazyList.defaultProps = {
  itemHeight: null,
  minItemHeight: 40,
  bufferSize: 4,
  defaultScrollTop: 0,
}

LazyList.propTypes = {
  renderItem: PropTypes.func,
  // chidren can be a custom render for lisitem
  children: PropTypes.func,
  data: PropTypes.array,
  itemHeight: PropTypes.number,
  minItemHeight: PropTypes.number,
  defaultScrollTop: PropTypes.number,
  className: PropTypes.string,
  scrollBodyClassName: PropTypes.string,
}

export default pureRender(LazyList)
