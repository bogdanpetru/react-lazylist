const getRowsRangeToRender = ({height, rowHeight, scrollTop, extraRows= 6}) => {
  const noRowsToRender = height / rowHeight + extraRows
  
  if (scrollTop <= (extraRows/2) * rowHeight) {
    // reder first n items
    return {
      from: 0,
      to: noRowsToRender
    }
  }

  const renderFrom = scrollTop / rowHeight - (extraRows / 2)
  const rowsToRender = {
    from: ~~renderFrom,
    to: ~~renderFrom + ~~noRowsToRender,
  }

  return rowsToRender
}


export default getRowsRangeToRender