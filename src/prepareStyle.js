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
        height: scrollBodyHeight || 300,
        maxHeight: scrollBodyHeight || 300,
        overflowY: 'hidden',
        overflowX: 'auto',
        boxSizing: 'border-box',
        pointerEvents: 'auto'
      },
      bodyStyle
    )

    debugger

  return <Component
    {...restProps}
    style={style}
    bodyStyle={scrollBodyStyle}
    items={items}
    rowHeight={rowHeight}
  />
}

prepareStyle.displayName = 'StyleLayer'

export default prepareStyle
