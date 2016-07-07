
**minItemHeight**
> minItemHeight?: Number

It is used to calculate the visible rows and buffer size. It is less performant as **itemHeight*.


**idProp**
> idProp?: String

Optional. Specify an custom attribute to be used as `id`. This will be used for key by default.
Also this is required to use `scrollToId` method.



**initialScrollIndex**
> initialScrollIndex: Number



**initialScrollId**
> initialScrollId: String/Number

Initial scroll so that the item with `id` is in view. It can be `id` or custom `idProp`. To use this prop, an `id` must be present in data or `idProp` is set.



**onScroll**
> onScroll: (scrollTop: Number) => void

Called onScroll.


**enableArrowNavigation**
> enableArrowNavigation?: Booleon

Weather to navigate list using arrows. Active element will have `.react-lazylist__item--active` class.
Defaults is `false`.



**groups**
> groups?: String

Specify the key by which to group items. See example.
Groups/tabs, a way to group items. It will show a sticky title of the current group similar to iPhone contact list.

Defaults is `null`;

```js
// Or we can group them by a coommon key
const data = [
  {
    name: 'foo',
    category: 'Foo Category'
  },
  {
    name: 'fooFoo',
    category: 'Foo Category'
  }
]

<LazyList data={data} groups="category" />
```


### Methods
**setScrollTop**
> setScrollTop(scrollTop: Number) => void

**scrollToIndex**
> scrollToIndex(index: Number) => void

**scrollToId**
> scrollToId(id: String/Number) => void

Scroll to id specified by `idProp`, it defaults to `id` key in data. To use this method it is required to have a unique `id` key on data, or a custom `idProp` set.
