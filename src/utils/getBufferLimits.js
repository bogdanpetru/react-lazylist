const getBufferLimits = ({ from, to, itemHeight }) => {
  const bufferHeight = (to - from) * itemHeight
  const bufferStart = from *  itemHeight
  const bufferEnd = bufferStart + bufferHeight

  return {
    start: bufferStart,
    end: bufferEnd
  }
}

export default getBufferLimits
