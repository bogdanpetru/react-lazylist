## How whould virtual scroll and non-fixed item height

- What if the scroll is not exact but proportional with the item's index.
When scrolling don't calculate the what item to be renderd based item height.
Insted scrollTop can be calculated in %, and the item to be renderd will be relative, an estimation.
There must be some strange edge cases here. A minHeight is needed at least.

- What if the height of each item is read from the dom and cached. This
way calculations can be made what to render. But in this case, there is a problem 
with items that change height. How do you invalidate the cache?.

- It seems to work with relative itemHeight, with virtual render based on scrollTop 
proportion. The probem is, how do you render items with translate to the correct height.
Have to try using a wrapper that is translated, and let items keep their position.