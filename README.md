# React Lazy List

Awesome react list, lazy renders only the visible rows.

## The component is not production ready, currently working on documentation. At the moment none of the documented api is implemented.

## Goal
A list that be performant with 10^6 lines rendered, flexible line height, easy customizable (themes and render hooks). Supports `tabs` as iPhone contact list.

## TODO MVP:
- [x] write mvp documentation
- [ ] implement documentation
- [ ] write tests
- [ ] use flow
- [ ] virtual render
- [ ] basic theme

## Props

### Basics

**key**
> key: String

Select what attribute to be used as key. It defaults to `id`, if no `id` attribute on data, it will use render `index`.


**data**
> data: Array/Promise(Array)

It is an array or a promise that returns an array of objects containing data to be rendered.

**idProp**
> idProp?: String

Optional. Specify an custom attribute to be used as `id`. This will be used for key by default.
Also this is required to use `scrollToId` method.

**initialScrollIndex**
> initialScrollIndex: Number

Initial scroll is so that this item is in view.

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

## CSS ClassNames index
`react-lazylist`

`react-lazylist--isNavigationEnabled`

`react-lazylist--isControlled` - when `scrollTop` is controlled thru props.

## Usage

```js
  const data = [
    {
      name: 'hello', lastName: 'world'
    }, {
      ..
    },
    ..
  ]

  const renderItem = ({ name }) => <div>{name}</div>
  const getItemHeight = ( dataItem ) => 20

  <LazyList
    data={data}
    height={400}
    minItemHeight={50}
    getItemHeight={getItemHeight}
    renderItem={renderItem}
  />
```

## Installation

```bash
git clone https://github.com/bogdanpetru/react-lazylist.git
cd react-lazylist
npm install
npm start
open http://localhost:3000
```

## License
MIT
