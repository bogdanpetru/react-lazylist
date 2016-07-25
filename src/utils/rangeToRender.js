const getRangeToRender = ({
    viewportHeight, 
    itemHeight, 
    scrollTop,
    bufferSize = 4
}) => {

  const noItemsToRender = Math.ceil(viewportHeight / itemHeight) + bufferSize
  
  const itemsBeforeScrollTop = parseInt(scrollTop / itemHeight, 10);
  /**
   * buffer is spread before and after the visible area
   * e.g if the buffer is 4, two extra items will be rendered
   * before and after the visible area
   **/ 
  const halfBufferSize = Math.ceil(bufferSize / 2);

  let from = itemsBeforeScrollTop - halfBufferSize
  if (from <= 0) {
    from = 0;
  }

  const to = from + noItemsToRender;
  
  return { from, to }
}

const getRelativeRangeToRender = ({
  viewportHeight, 
  scrollTop,
  scrollHeight,
  bufferSize = 4,
  itemsLength,
  itemHeight,
}) => {
  const scrollTopProcent = scrollTop / scrollHeight

  const noItemsToRender = Math.ceil(viewportHeight / itemHeight) + bufferSize
  
  const itemsBeforeScrollTop = parseInt(scrollTop / itemHeight, 10);
  /**
   * buffer is spread before and after the visible area
   * e.g if the buffer is 4, two extra items will be rendered
   * before and after the visible area
   **/ 
  const halfBufferSize = Math.ceil(bufferSize / 2);

  let from = Math.ceil(itemsLength * scrollTopProcent) - halfBufferSize
  if (from <= 0) {
    from = 0;
  }

  const to = from + noItemsToRender;
  
  return { from, to }
}

export {
  getRelativeRangeToRender,
}

export default getRangeToRender