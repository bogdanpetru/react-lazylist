import React, { Component, PropTypes } from 'react'
import ListItem from './ListItem'
import ScrollBody from './ScrollBody'
import rangeToRender from './utils/rangeToRender'
import pureRender from './utils/pureRender'
import assign from './utils/assign'
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
        this.props.scrollTop,
        listHeight
      )
    }
  }

  render () {
    const {
      data,
      renderItem,
      itemHeight,

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

    const scrollHeight = data.length * itemHeight;
    const scrollBodyStyle = assign({}, this.props.scrollBodyStyle, {
      height: scrollHeight
    })

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
            const translateY = (realIndex * itemHeight) - translateCorrection

            return <ListItem
              {...item}
              itemHeight={itemHeight}
              renderItem={renderItem}
              key={key}
              translateY={translateY}
            />
          })
      }
      </ScrollBody>
    </div>
  }

  getFromTo(scrollTo, listHeight) {
   const {
      itemHeight,
      bufferSize
    } = this.props

    const fromTo = rangeToRender({
      viewportHeight: listHeight || this.state.lazylistHeight,
      itemHeight,
      scrollTop: scrollTo || this.state.scrollTop,
      bufferSize
    })

    return fromTo
  }

  onScroll(event) {
    const scrollTop = event.target.scrollTop
    const {
      bufferStart,
      bufferEnd
    } = this.state

    // we have to determine if the buffer is consumed
    if (scrollTop + this.state.lazylistHeight >= bufferEnd || scrollTop <= bufferStart) {
      this.refreshScrollState(scrollTop);
    }
  }

  refreshScrollState(scrollTop, listHeight) {
    const {
      from,
      to
    } = this.getFromTo(scrollTop, listHeight);

    const {
      start: bufferStart,
      end: bufferEnd
    } = getBufferLimits({
      from,
      to,
      itemHeight: this.props.itemHeight,
    })

    this.setState({
      from,
      to,
      bufferStart,
      bufferEnd
    })
  }
}

LazyList.defaultProps = {
  itemHeight: 40,
  bufferSize: 4,
  defaultScrollTop: 0
}

LazyList.propTypes = {
  renderItem: PropTypes.func.isRequired,
  itemHeight: PropTypes.number,
  defaultScrollTop: PropTypes.number
}

export default pureRender(LazyList)
