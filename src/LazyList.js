import React, { Component, PropTypes } from 'react'
import ListItem from './ListItem'
import ScrollBody from './ScrollBody'
import rangeToRender from './utils/rangeToRender'
import pureRender from './utils/pureRender'

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
      const newState = { lazylistHeight: node.offsetHeight }
      this.setState(newState)
      // TODO: refactor
      // doing this cause getFromTO needs lazyListHeight
      this.setState(this.getFromTo())
    }
  }

  render () {
    const {
      data,
      renderItem,

      // style
      className,
      scrollBodyClassName,

    } = this.props


    const {
      from,
      to
    } = this.state


    const style = Object.assign({}, this.props.style, {
      overflow: 'auto'
    })

    const scrollHeight = data.length * itemHeight;
    const scrollBodyStyle = Object.assign({}, this.props.scrollBodyStyle, {
      height: scrollHeight
    })

    return <div
      className={`react-lazylist ${className}`}
      style={style}
      ref="lazylist"
      onScroll={(event) => this.setState({ scrollTop: event.target.scrollTop })}
    >
      <ScrollBody
        style={scrollBodyStyle}
        className={scrollBodyClassName}
        onScroll={this.onScroll}
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

            // because items are positioned with
            // translate and they have position
            // have to take into account their inital position
            const translateCorrection = (index + 1) * itemHeight
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

  getFromTo(scrollTo) {

   const {
      itemHeight,
      bufferSize
    } = props

    const fromTo = rangeToRender({
      viewportHeight: this.state.lazylistHeight,
      itemHeight,
      scrollTop: scrollTo || this.state.scrollTop,
      bufferSize
    })

    return fromTo
  }

  onScroll(scrollTop) {
    const {
      bufferStart,
      bufferEnd
    } = this.state
 

    if (!bufferStart || !bufferEnd) 
     // determine the buffern limits
   
    // we have to determine if the buffer is consumed
    if (scrollTop >= bufferEnd || scrollTop <= bufferStart) {
      const newState = assing(
        { scrollTop }, 
       this.getFromTo(scrollTo)
      )

      this.setState(newState)
    }
  }

  getBufferLimits({ from, to, itemHeight }) {
    const bufferHeight = (to - from) * itemHeight
    const bufferStart = from *  itemHeight
    const bufferEnd = bufferStart + bufferHeight

    return {
      start: bufferStart,
      end: bufferEnd
    }
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
