const getRowsRangeToRender = ({height, rowHeight, scrollTop, extraRows= 6}) => {
  const noRowsToRender = Math.ceil(height / rowHeight + extraRows)

  if (scrollTop <= (extraRows/2) * rowHeight) {
    // reder first n items
    return {
      from: 0,
      to: noRowsToRender
    }
  }

  const renderFrom = Math.ceil(scrollTop / rowHeight - (extraRows / 2))
  const to = from + noRowsToRender;

  const rowsToRender = { from, to }

  return rowsToRender
}


export default getRowsRangeToRender
