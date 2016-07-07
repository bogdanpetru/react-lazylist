import React, { Component, PropTypes } from 'react'

class ScrollBody extends Component {
  constructor(props) {
    super(props)

    this.onScroll = (event) => props.onScroll(event.target.scrollTop)
  }

  render() {
    const {
      onScroll,
      ...restProps
    } = this.props


    return <div
      {...restProps}
      onScroll={this.onScroll}
    >;
  }
}
