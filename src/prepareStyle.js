import React from 'react'

const prepareStyle = (Component) => ({
  style: globalStyle,
  height,
  bodyStyle,
  items,
  rowHeight,
  ...restProps
}) => {

  const style = Object.assign({
      height: height || '100%',
      overflowY: 'auto',
      position: 'relative'
    }, globalStyle)

  const scrollBodyHeight = items.length * rowHeight

  const scrollBodyStyle = Object.assign({
        height: scrollBodyHeight,
        maxHeight: scrollBodyHeight,
        overflowY: 'hidden',
        overflowX: 'auto',
        boxSizing: 'border-box',
        pointerEvents: 'auto'
      },
      bodyStyle
    )

  return <Component
    {...restProps}
    style={style}
    bodyStyle={scrollBodyStyle}
    items={items}
    rowHeight={rowHeight}
  />
}


export default prepareStyle
